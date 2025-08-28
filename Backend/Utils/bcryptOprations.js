const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS || 10;

const createHash = (password) =>{
    try{
    const hash = bcrypt.hash(password, saltRounds);
    return hash;
    }catch(err){
        return err;
    }
}

const compareHash = (password,userPassword) =>{
    return bcrypt.compare(password, userPassword);
}

module.exports = {createHash, compareHash};