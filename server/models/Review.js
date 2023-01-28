const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "Please add rating"],
  },

  title: {
    type: String,
    required: [true, "Please add title"],
  },

  description: {
    type: String,
    required: [true, "Please add description"],
  },

  movie: {
    type: mongoose.Schema.ObjectId,
    ref: "Movie",
    required: [true, "Please add movie"],
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please add user"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
