const mongoose = require("mongoose");
const {Schema} = mongoose();

const studentSchema = new Schema({
    name: String,
    enrollment: String,
    phone: String,
    email: String,
    receipt: String,
    year: {
        type: Number,
        min:1,
        max:4
    },
    amount: Number
});

const studentModel = mongoose.model("Student",studentSchema);
module.exports = studentModel;