const express = require("express");
const router = express.Router();
const multer = require('multer');
const { storage } = require('../Utils/cloudConfig');
const upload = multer({ storage: storage });
const jwt = require('jsonwebtoken');
const {verifyToken} = require("../Utils/tokenManager");
const {verifyRole} = require("../Utils/verifyRole");
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;

const eventModel = require("../Models/eventModel");

router.post("/tokeninfo",(req,res)=>{
    let {token} = req.body;
    var decoded = jwt.verify(token, jwt_secret);
    res.status(200).json({message:"Token Verified",decoded});
})

router.post("/create",verifyToken,verifyRole("admin"),upload.single("image"),async(req,res)=>{
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

module.exports = router;