const fs = require("fs");
const path = require("path");
const {parse} = require("csv-parse");
const mongoose = require("mongoose");
const filePath = path.join(__dirname, "../public/student.csv");

const StudentSchema = new mongoose.Schema({
    Gender: String,
  EthnicGroup: String,
  ParentEduc: String,
  LunchType: String,
  TestPrep: String,
  MathScore: Number,
  ReadingScore: Number,
  WritingScore: Number
});
const Student = mongoose.model("Student", StudentSchema);
console.log(fs);
fs.readFile(filePath, "utf8", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    parse(data, {columns: true, trim: true}, (err, record) => {
        let records = [];
        if(err) {
            console.error(err);
            return;
        }
        records = record;
        // console.log(records[0]);
        records.forEach(async (item) => {
            const student = new Student(item);
            await student.save();
        });
    });
    return;
})
// const stream = fs.createReadStream(filePath, "utf8");
// stream.on("data", (chunk) => {
//     // console.log("Chunk :", chunk);
//     console.log(typeof(chunk))
//     console.log("  ");
// }
// )
// stream.on("end",()=>{
//     console.log("File read completed");
// })

const main = async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017/csvtojson')
}
main();