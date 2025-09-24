// server7.js
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jhansirambha:J05%407@collegetalenthub.47hm9a4.mongodb.net/student");

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Student = mongoose.model("Student", StudentSchema);

async function insertStudent() {
  const s = new Student({ name: "Alice", age: 21 });
  await s.save();
  console.log("Student inserted:", s);
}

insertStudent();
