const express = require("express");
const studentModel = require("../models/studentModel.js");

const router = express.Router();

// get all students route
router.get("/", async (req, res) => {
  const students = await studentModel.find();
  res.json(students);
});

// Create new student route
router.post("/", async (req, res) => {
  const newStudent = new studentModel(req.body);
  await newStudent.save();
  res.json(newStudent);
});

// Update student route
router.put("/:id", async (req, res) => {
  const updatedStudent = await studentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedStudent);
});

// Delete student route
router.delete("/:id", async (req, res) => {
  await studentModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted successfully" });
});

module.exports = router;
