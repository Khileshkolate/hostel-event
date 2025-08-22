const mongoose = require("mongoose");
const {Schema} = mongoose();

const eventSchema = new Schema({
    name: String,
    date: String,
    time: String,
    location: String,
    description: String,
    img: String,
    accoutDetail: String,
    firstYear: Number,
    secondYear: Number,
    thirdYear: Number,
    fourthYear: Number,
});

const eventModel = mongoose.model("Event",eventSchema);
module.exports = eventModel;