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
const Student = require('../Models/Student');

// Configure multer for file upload
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  }
});

// Improved CSV parser function
function parseCSV(csvData) {
  try {
    const lines = csvData.split(/\r\n|\n/);
    const result = [];
    
    if (lines.length < 2) {
      throw new Error('CSV file must have at least a header row and one data row');
    }
    
    // Extract and normalize headers
    const headers = lines[0].split(',').map(header => 
      header.trim().toLowerCase().replace(/\s+/g, '')
    );
    
    console.log('CSV Headers detected:', headers);
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const obj = {};
      let currentline;
      
      // Handle quoted fields that might contain commas
      if (line.includes('"')) {
        currentline = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      } else {
        currentline = line.split(',');
      }
      
      for (let j = 0; j < headers.length; j++) {
        if (j < currentline.length) {
          // Remove quotes if present
          let value = currentline[j].trim().replace(/^"(.*)"$/, '$1');
          obj[headers[j]] = value;
        } else {
          obj[headers[j]] = '';
        }
      }
      
      // Only add if we have at least enrollment, name, and email
      if (obj.enrollmentno && obj.name && obj.email) {
        result.push(obj);
      }
    }
    
    console.log(`Parsed ${result.length} valid records from CSV`);
    return result;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    throw new Error('Failed to parse CSV file: ' + error.message);
  }
}

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
    
    // Parse CSV
    const csvData = req.file.buffer.toString();
    console.log('CSV data length:', csvData.length, 'characters');
    
    const results = parseCSV(csvData);
    console.log('Successfully parsed CSV with', results.length, 'records');
    
    if (results.length === 0) {
      console.log('No valid data found in CSV after parsing');
      return res.status(400).json({ error: 'No valid student records found in the CSV file' });
    }
    
    // Process and validate students
    const students = results.map((row, index) => {
      // Map CSV fields to our schema (handling different header formats)
      const enrollmentNo = row.enrollmentno || row.enrollment || row.id || '';
      const name = row.name || row.studentname || row.fullname || '';
      const email = row.email || row.emailaddress || '';
      const branch = row.branch || row.department || '';
      const year = row.year || row.standard || '';
      
      return {
        enrollmentNo: enrollmentNo.toString(), // Ensure it's a string
        name,
        email: email.toLowerCase(),
        branch,
        year: year.includes('Year') ? year : `${year} Year` // Ensure format
      };
    }).filter(student => 
      student.enrollmentNo && student.name && student.email
    );
    
    console.log('After validation:', students.length, 'valid students');
    
    if (students.length === 0) {
      return res.status(400).json({ error: 'No valid student records found after validation' });
    }
    
    // Insert into database with detailed error handling
    let insertedCount = 0;
    let duplicateCount = 0;
    let validationErrors = [];
    
    for (const student of students) {
      try {
        // Check if student already exists
        const existingStudent = await Student.findOne({ 
          $or: [
            { enrollmentNo: student.enrollmentNo },
            { email: student.email }
          ]
        });
        
        if (existingStudent) {
          duplicateCount++;
          console.log(`Duplicate found: ${student.enrollmentNo} - ${student.email}`);
          continue;
        }
        
        // Create and validate new student
        const newStudent = new Student(student);
        
        // Validate the document
        await newStudent.validate();
        
        // Save to database
        await newStudent.save();
        insertedCount++;
        console.log(`✅ Inserted student: ${student.enrollmentNo} - ${student.name}`);
      } catch (error) {
        if (error.code === 11000) {
          duplicateCount++;
          console.log(`Duplicate found (save error): ${student.enrollmentNo}`);
        } else if (error.name === 'ValidationError') {
          console.log(`Validation error for ${student.enrollmentNo}:`, error.message);
          validationErrors.push({
            enrollmentNo: student.enrollmentNo,
            error: error.message
          });
        } else {
          console.error(`Error saving student ${student.enrollmentNo}:`, error.message);
          validationErrors.push({
            enrollmentNo: student.enrollmentNo,
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
    
  } catch (error) {
    console.error('Upload process error:', error);
    res.status(500).json({ error: 'Server error during upload: ' + error.message });
  }
});

// GET endpoint to download sample CSV
router.get('/sample-csv', (req, res) => {
  const sampleData = `EnrollmentNo,Name,Email,Branch,Year
20230001,John Doe,john@example.com,Computer Science,1st Year
20230002,Jane Smith,jane@example.com,Electrical Engineering,2nd Year
20230003,Robert Johnson,robert@example.com,Mechanical Engineering,3rd Year
20230004,Emily Davis,emily@example.com,Civil Engineering,4th Year`;
  
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