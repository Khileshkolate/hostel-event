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
    role:{
        type:String,
        default:"user",
        enums:["user","admin","volunteer"]
    },
    event:[
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    email:String,
    phone: String,
    token: String
})

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;