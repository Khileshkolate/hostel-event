// const express = require("express");
// const mongoose = require('mongoose');
// const app = express();
// const port = 8080;
// require("dotenv").config();
// const mongo_url = process.env.MONGO_URL;
// const userModel = require("./Models/userModel");
// const userRoutes = require("./Routes/user.routes");
// const receiptRoutes = require("./Routes/receipt.routes");
// const eventRoutes = require("./Routes/events.routes");
// const studentsRouter = require('./Routes/students');
// const cors = require("cors");
// app.use(express.json());
// app.use(cors());

// app.get("/",async(req,res)=>{
//     res.json({"message":"server started"});
// })

// app.use("/user",userRoutes);

// app.use("/receipt",receiptRoutes);
// app.use("/event",eventRoutes);
// app.use('/api/students', studentsRouter);

// const main = async()=>{
//     console.log("connecting to database");
//     await mongoose.connect(mongo_url)
//     .then(console.log("database connected"));
// }

// app.listen(port,async()=>{
//     console.log(`Port is listening at ${port}`);
//     main();
// })




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentsRouter = require('./Routes/students');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced MongoDB connection with debugging
const MONGODB_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/HostelEvents';

console.log('Attempting to connect to MongoDB...');
console.log('Connection string:', MONGODB_URI.replace(/:[^:]*@/, ':****@')); // Hide password

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  console.log('✅ Database name:', mongoose.connection.name);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
  console.error('❌ Error details:', error);
});

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('❌ Mongoose disconnected from MongoDB');
});

// Close connection on app termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

// Routes
app.use('/api/students', studentsRouter);

// Test route to check database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const Student = require('./Models/Student');
    const count = await Student.countDocuments();
    res.json({ 
      success: true, 
      message: 'Database connection is working',
      studentCount: count,
      dbName: mongoose.connection.name
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Database connection failed',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});