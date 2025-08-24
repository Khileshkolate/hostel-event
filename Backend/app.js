const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8080;
require("dotenv").config();
const mongo_url = process.env.MONGO_URL;
const userModel = require("./Models/userModel");

app.get("/",async(req,res)=>{
    const op =await userModel.find();
    console.log("db: ",op);
    res.json({"message":"server started"});
})
const main = async()=>{
    console.log("connecting to database");
    await mongoose.connect(mongo_url)
    .then(console.log("database connected"));
}

app.listen(port,async()=>{
    console.log(`Port is listening at ${port}`);
    main();
})