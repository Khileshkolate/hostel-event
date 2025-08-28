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

module.exports = generateToken;