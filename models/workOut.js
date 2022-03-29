const { Schema } = require('mongoose')

const Workout = new Schema(
  {
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    description: { type: String, required: true },
    review: { type: Schema.Types.ObjectId, ref: 'reviews' }
  },
  { timestamps: true }
)

module.exports = Workout