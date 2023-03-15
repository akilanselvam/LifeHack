const mongoose = require("mongoose");

const lifeHackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title Must Always Have a title"],
    unique: true
  },
  description: {
    type: String,
    required: [true, "A description Must Always Have a description"]
  },
  approval: {
    type: String,
    required: [true, "A approval Must Always Have a approval"]
  },
  lhDate: {
    type: Date,
    required: true
  }
});

const lifeHacks = new mongoose.model("lifeHack", lifeHackSchema);

module.exports = lifeHacks;
