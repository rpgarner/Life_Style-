const { Schema } = require('mongoose')

const Review = new Schema(
  {
   comment: { type: String, required: true },
   rating: { type: Number, required: true },
   creator: { type: String, required: true },
  
  },
  { timestamps: true }
)

module.exports = Review