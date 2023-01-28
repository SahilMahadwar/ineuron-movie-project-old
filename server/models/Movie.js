const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add movie name"],
    },

    poster: {
      type: String,
      required: [true, "Please add movie poster"],
    },

    description: {
      type: String,
      required: [true, "Please add movie poster"],
    },

    status: {
      type: String,
      required: false,
    },

    tagline: {
      type: String,
      required: false,
    },

    releaseDate: {
      type: String,
      required: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Cascade delete courses when a bootcamp is deleted
MovieSchema.pre("remove", async function (next) {
  console.log(`Review being removed from movie ${this._id}`);
  await this.model("Review").deleteMany({ movie: this._id });
  next();
});

// Reverse populate with virtuals
MovieSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "movie",
  justOne: false,
});

// https://image.tmdb.org/t/p/w600_and_h900_bestv2

module.exports = mongoose.model("Movie", MovieSchema);
