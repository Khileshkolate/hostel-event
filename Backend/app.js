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
const uploadRoutes = require('./Routes/students');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/HostelEvents', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/upload', uploadRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Student CSV Upload API' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});