const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8080;
require("dotenv").config();
const mongo_url = process.env.MONGO_URL;
const userModel = require("./Models/userModel");
const userRoutes = require("./Routes/user.routes");
const receiptRoutes = require("./Routes/receipt.routes");
const eventRoutes = require("./Routes/events.routes");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    res.json({"message":"server started"});
})

app.use("/user",userRoutes);
app.use("/receipt",receiptRoutes);
app.use("/event",eventRoutes);

const main = async()=>{
    console.log("connecting to database");
    await mongoose.connect(mongo_url)
    .then(console.log("database connected"));
}

app.listen(port,async()=>{
    console.log(`Port is listening at ${port}`);
    main();
})