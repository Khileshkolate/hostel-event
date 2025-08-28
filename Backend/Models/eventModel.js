const mongoose = require("mongoose");
const {Schema} = mongoose;

const eventSchema = new Schema({
    title: String,
    date: String,
    time: String,
    location: String,
    description: String,
    image: {
        url:String,
        filename:String
    },
    accoutDetail: String,
    firstYear: Number,
    secondYear: Number,
    thirdYear: Number,
    fourthYear: Number,
});

const eventModel = mongoose.model("Event",eventSchema);
module.exports = eventModel;