const express = require("express");
const router = express.Router();
const userModel = require("../Models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {generateToken} = require("../Utils/tokenManager");
const {createHash, compareHash} = require("../Utils/bcryptOprations");
// Get all users
router.get("/",async(req,res)=>{
    const users = await userModel.find({},{password:0,token:0,__v:0});
    res.status(200).json(users);
})

router.post("/signup",async(req,res)=>{
    const {name,enrollment, password,email,phone} = req.body;
    if(!name || !enrollment || !password || !email || !phone){
        return res.status(400).json({"message":"All fields are required"});
    }
    const userPresent = await userModel.findOne({enrollment:enrollment});
    console.log("userPresent: ",userPresent);
    if(userPresent){
        return res.status(400).json({"message":"User already exists"});
    }
    let newUser = new userModel({name,enrollment,role:"user",email,phone});
    const hash = await createHash(password);
    console.log("hash generated: ",hash);
    newUser.password = hash;
    await newUser.save();
    return res.status(201).json({"message":"User created successfully"});
});

router.post("/login",async(req,res)=>{
    const {enrollment,password} = req.body;
    if(!enrollment || !password){
        return res.status(400).json({"message":"All fields are required"});
    }
    const user = await userModel.findOne({enrollment:enrollment});
    if(!user){
        return res.status(400).json({"message":"User does not exist"});
    }
    console.log("check");
    let isMatch = await compareHash(password,user.password);
    if(!isMatch){
        return res.status(400).json({"message":"Invalid credentials"});
    }
    let token = generateToken(user);
    user.token = token;
    await user.save();
    return res.status(200).json({"message":"Login successful","token":token});
    // bcrypt.compare(password, user.password, function(err, result) {
    //     console.log("result: ",result);
    //     if(result){
    //         let token = generateToken(user);
    //         user.token = token;
    //         await user.save();
    //         return res.status(200).json({"message":"Login successful","token":token});
    //     }else{
    //         return res.status(400).json({"message":"Invalid credentials"});
    //     }
    // });
})

module.exports = router;