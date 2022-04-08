const { Schema } = require("mongoose");

const Exercise = new Schema(
  {
    type: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    reviews: { type: Schema.Types.ObjectId, ref: "review" },
  },
  { timestamps: true }
);

module.exports = Exercise;
