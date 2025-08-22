const mongoose = require("mongoose");
const {Schema} = mongoose();

const facultyDonationSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    amount: Number,
    voluteer:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const facultyDonationModel = mongoose.model("Donation",facultyDonationSchema);
module.exports = facultyDonationModel;