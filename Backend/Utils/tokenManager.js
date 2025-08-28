const jwt = require('jsonwebtoken');
const generateToken = (user)=>{
    let token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {expiresIn: '1d'}
    )
    return token;
}

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    try{
        let token = authHeader.split(" ")[1];
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({valid: false, message: "Invalid Token"});
    }
}

module.exports = {generateToken,verifyToken};