const { Schema } = require('mongoose')

const Diet = new Schema(
  {
   Title: { type: String, required: true },
   comments: { type: String, required: true },
   ingrediants: { type: String, required: true },
   directions: { type: String, required: true },
   rating: { type: String, required: true },
  
  },
  { timestamps: true }
)

module.exports = Diet