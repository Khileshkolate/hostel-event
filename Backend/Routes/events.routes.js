const express = require("express");
const route = express.Router();
const multer = require('multer');
const { storage } = require('../Utils/cloudConfig');
const upload = multer({ storage: storage });

const eventModel = require("../Models/eventModel");

route.post("/create",upload.single("image"),async(req,res)=>{
    let {title,date,time,location,description,accoutDetail,firstYear,secondYear,thirdYear,fourthYear} = req.body;
    let url = req.file.path;
    let filename = req.file.filename;
    let newEvent = new eventModel({
        title,date,time,location,description,
        image:{url,filename},
        accoutDetail,firstYear,secondYear,thirdYear,fourthYear
    })
    console.log("new Event: ",newEvent);
    res.status(200).json({message:"Event Created Successfully",event:newEvent});
});

module.exports = route;