// const express = require('express');
// const multer = require('multer');
// const csv = require('csv-parser');
// const stream = require('stream');
// const router = express.Router();
// const Student = require('../Models/Student');

// // Configure multer for file upload
// const upload = multer({ storage: multer.memoryStorage() });

// // POST endpoint for CSV upload
// router.post('/upload', upload.single('csvFile'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }
    
//     const results = [];
//     const bufferStream = new stream.PassThrough();
//     bufferStream.end(req.file.buffer);
    
//     bufferStream
//       .pipe(csv())
//       .on('data', (data) => results.push(data))
//       .on('end', async () => {
//         try {
//           // Validate and process the data
//           const students = results.map(row => ({
//             enrollmentNo: row['Enrollment No'] || row['enrollmentNo'],
//             name: row['Name'] || row['name'],
//             email: row['Email'] || row['email'],
//             branch: row['Branch'] || row['branch'],
//             year: row['Year'] || row['year']
//           })).filter(student => 
//             student.enrollmentNo && student.name && student.email
//           );
          
//           if (students.length === 0) {
//             return res.status(400).json({ error: 'No valid student records found' });
//           }
          
//           // Insert into database
//           const result = await Student.insertMany(students, { ordered: false });
          
//           res.json({
//             message: 'Students uploaded successfully',
//             insertedCount: result.length
//           });
//         } catch (error) {
//           console.error('Error processing CSV:', error);
//           res.status(500).json({ error: 'Error processing CSV file' });
//         }
//       })
//       .on('error', (error) => {
//         console.error('CSV parsing error:', error);
//         res.status(400).json({ error: 'Invalid CSV format' });
//       });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ error: 'Server error during upload' });
//   }
// });

// // GET endpoint to download sample CSV
// router.get('/sample-csv', (req, res) => {
//   const sampleData = `Enrollment No,Name,Email,Branch,Year
// 20230001,John Doe,john@example.com,Computer Science,1st Year
// 20230002,Jane Smith,jane@example.com,Electrical Engineering,2nd Year
// 20230003,Robert Johnson,robert@example.com,Mechanical Engineering,3rd Year
// 20230004,Emily Davis,emily@example.com,Civil Engineering,4th Year`;
  
//   res.setHeader('Content-Type', 'text/csv');
//   res.setHeader('Content-Disposition', 'attachment; filename=sample-students.csv');
//   res.send(sampleData);
// });

// module.exports = router;












const express = require('express');
const multer = require('multer');
const router = express.Router();
const Student = require('../models/Student');
const csv = require('csv-parser');
const stream = require('stream');

// Configure multer for file upload
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || 
        file.mimetype === 'application/vnd.ms-excel' ||
        file.originalname.endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  }
});

// POST endpoint for CSV upload
router.post('/upload', upload.single('csvFile'), async (req, res) => {
  console.log('\n=== CSV UPLOAD REQUEST RECEIVED ===');
  
  try {
    if (!req.file) {
      console.log('No file uploaded');
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    console.log('File received:', req.file.originalname, 'Size:', req.file.size, 'bytes');
    
    // Check MongoDB connection
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      console.error('MongoDB is not connected. Ready state:', mongoose.connection.readyState);
      return res.status(500).json({ error: 'Database not connected. Please try again.' });
    }
    
    console.log('MongoDB connection status: OK');
    
    // Parse CSV using csv-parser
    const results = [];
    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);
    
    bufferStream
      .pipe(csv({
        mapHeaders: ({ header, index }) => header.trim().toLowerCase().replace(/\s+/g, '')
      }))
      .on('data', (data) => {
        // Clean and validate data
        if (data.enrollmentno && data.name && data.email) {
          // Standardize year format
          if (data.year && !data.year.includes('Year')) {
            data.year = `${data.year} Year`;
          }
          
          // Ensure branch is uppercase
          if (data.branch) {
            data.branch = data.branch.toUpperCase().trim();
          }
          
          results.push(data);
        }
      })
      .on('end', async () => {
        console.log('CSV parsing completed. Found', results.length, 'records');
        
        if (results.length === 0) {
          return res.status(400).json({ error: 'No valid student records found in the CSV file' });
        }
        
        // Process students
        let insertedCount = 0;
        let duplicateCount = 0;
        let validationErrors = [];
        
        for (const row of results) {
          try {
            // Map CSV fields to our schema
            const studentData = {
              enrollmentNo: row.enrollmentno,
              name: row.name,
              email: row.email.toLowerCase(),
              phonenumber: row.phonenumber || row.phone,
              branch: row.branch,
              year: row.year
            };
            
            // Check if student already exists
            const existingStudent = await Student.findOne({ 
              $or: [
                { enrollmentNo: studentData.enrollmentNo },
                { email: studentData.email }
              ]
            });
            
            if (existingStudent) {
              duplicateCount++;
              console.log(`Duplicate found: ${studentData.enrollmentNo} - ${studentData.email}`);
              continue;
            }
            
            // Create and validate new student
            const newStudent = new Student(studentData);
            
            // Validate the document
            await newStudent.validate();
            
            // Save to database
            await newStudent.save();
            insertedCount++;
            console.log(`✅ Inserted student: ${studentData.enrollmentNo} - ${studentData.name}`);
          } catch (error) {
            if (error.code === 11000) {
              duplicateCount++;
              console.log(`Duplicate found (save error): ${studentData.enrollmentNo}`);
            } else if (error.name === 'ValidationError') {
              console.log(`Validation error for ${row.enrollmentno}:`, error.message);
              validationErrors.push({
                enrollmentNo: row.enrollmentno,
                error: error.message
              });
            } else {
              console.error(`Error saving student ${row.enrollmentno}:`, error.message);
              validationErrors.push({
                enrollmentNo: row.enrollmentno,
                error: error.message
              });
            }
          }
        }
        
        console.log(`Insertion completed. Inserted: ${insertedCount}, Duplicates: ${duplicateCount}, Errors: ${validationErrors.length}`);
        
        // Prepare response
        if (insertedCount === 0 && validationErrors.length > 0) {
          return res.status(400).json({ 
            error: 'No students were inserted due to validation errors',
            details: validationErrors
          });
        }
        
        if (validationErrors.length > 0) {
          return res.status(207).json({ 
            message: 'Partial success - some records had errors',
            insertedCount,
            duplicateCount,
            errorCount: validationErrors.length,
            errors: validationErrors
          });
        }
        
        res.json({
          message: 'Students uploaded successfully',
          insertedCount,
          duplicateCount
        });
      })
      .on('error', (error) => {
        console.error('CSV parsing error:', error);
        res.status(400).json({ error: 'Failed to parse CSV file: ' + error.message });
      });
    
  } catch (error) {
    console.error('Upload process error:', error);
    res.status(500).json({ error: 'Server error during upload: ' + error.message });
  }
});

// GET endpoint to download sample CSV
router.get('/sample-csv', (req, res) => {
  const sampleData = `Timestamp,Email address,Enrollment No,Name,Email,Phone number,Branch,Year,Branch
"22/08/2025 23:18:54","harshujimaha9977@gmail.com","0187CS231086","Harshal mahajan","harshujimaha9977@gmail.com","8959731155","CSE","3 Year","CSE"
"25/08/2025 17:08:47","adityakumaryadav2598@gmail.com","0187CS231021","Aditya Yadav","adityakumaryadav2598@gmail.com","7366843253","CSE","3 Year",""
"28/08/2025 22:52:32","rajadarsh2022@gmail.com","0187CS241009","ADARSH RAJ","rajadarsh2022@gmail.com","8825197556","CSE","2 Year",""
"28/08/2025 22:52:41","khileshkolate2004@gmail.com","0187CS233D03","Khilesh kolate","khileshkolate2004@gmail.com","7757854124","CSE","4 Year",""
"28/08/2025 22:53:20","ashwinikumar23225@gmail.com","0187CS241049","Ashwini kumar","ashwinikumar23225@gmail.com","6200648450","CSE","2 Year",""
"30/08/2025 13:28:39","sonu108rp@gmail.com","0187CS233D05","Sonu kumar","sonu108rp@gmail.com","7482992471","CSE","4 Year",""
"30/08/2025 21:08:47","ay053150@gmail.com","0187CS241004","Abhay","yadavjabhayyadav@gmail.com","9006309213","CSE","2 Year",""
"30/08/2025 21:11:57","namandwivedi170@gmail.com","0187CS221130","Naman Dwivedi","namandwivedi170@gmail.com","7703033102","CSE","4 Year",""
"30/08/2025 21:12:54","navendusingh45@gmail.com","0187CS221133","Navendu Singh","navendusingh45@gmail.com","7061171549","CSE","4 Year",""
"31/08/2025 21:24:38","shubhamsinha20000@gmail.com","0187CS233D04","Shubham Raj","shubhamsinha20000@gmail.com","7870495817","CSE","4 Year",""`;
  
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=sample-students.csv');
  res.send(sampleData);
});

// GET endpoint to check all students in DB (for debugging)
router.get('/debug', async (req, res) => {
  try {
    const students = await Student.find({}).sort({ createdAt: -1 }).limit(10);
    const totalCount = await Student.countDocuments();
    
    res.json({
      totalCount,
      recentStudents: students,
      database: mongoose.connection.name,
      connectionStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET endpoint to check if a specific student exists
router.get('/check/:enrollmentNo', async (req, res) => {
  try {
    const student = await Student.findOne({ enrollmentNo: req.params.enrollmentNo });
    
    if (student) {
      res.json({
        exists: true,
        student: student
      });
    } else {
      res.json({
        exists: false,
        message: 'Student not found'
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;