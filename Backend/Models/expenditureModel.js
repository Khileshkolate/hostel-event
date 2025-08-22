const mongoose = require("mongoose");
const {Schema} =  mongoose();

const expenditureSchema = mongoose.Schema({
    name:String,
    img:String,
    price:Number,
    volunteer:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    date:Date.now(),
    event:{
        type:Schema.Types.ObjectId,
        ref:"Event"
    }
})

const expenditureModel = mongoose.model("Expenditure",expenditureSchema);
module.exports = expenditureModel;