const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
