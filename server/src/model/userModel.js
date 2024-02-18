const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Add more fields as needed
});

module.exports = mongoose.model("User", userSchema);
