const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = mongoose.Schema({
    name:String,
    enrollment:String,
    password:String,
    event:[{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }],
    role:String,
    email:String,
    phone: String,
})

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;