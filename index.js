const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student.route");
const auth = require("./middleware/auth");
const routes = require("./routes/user.route");
const CORS = require("cors");
const path = require("path");
mongoose
  .connect("mongodb://127.0.0.1:27017/students-curd")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(CORS());
app.use("/api/users", routes);
app.use(auth);
app.use("/api/students", studentRoutes);

app.listen(3000, (req, res) => {
  console.log("server running on 3000");
});
