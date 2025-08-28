const multer = require('multer');
const express = require('express');
const { storage } = require('../Utils/cloudConfig');
const router = express.Router();

const upload = multer({ storage: storage });
const studentModel = require('../Models/studentModel');

router.post("/submit", upload.single('receipt'), async (req, res) => {
    try{
    let { name, enrollment, phone,event, email, year, amount } = req.body;
    let url = req.file.path;
    let filename = req.file.filename;
    let newPayment = new studentModel({
        name, enrollment, phone, email, year, amount,event,
        receipt: { url, filename }
    })
    // await newPayment.save()
    console.log("new Payment: ",newPayment);
    res.status(200).json({message:"Payment Submitted Successfully",receipt:newPayment});
}catch(err){
    console.log("Error: ",err);
    res.status(500).json({message:"Internal Server Error"});
}
})

module.exports = router;