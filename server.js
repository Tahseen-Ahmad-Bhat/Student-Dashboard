const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// import student routes
const studentRoutes = require("./routes/studentRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello from Server!");
  res.json("Hello world");
});

app.use("/api/student", studentRoutes);

// Connect with database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected with database successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
