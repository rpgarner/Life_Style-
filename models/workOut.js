const { Schema } = require('mongoose')

const Workout = new Schema(
  {
    type: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews_id'}]
  },
  { timestamps: true }
)

module.exports = Workout