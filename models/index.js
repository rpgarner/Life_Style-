const { model } = require('mongoose')
const WorkOut = require('./workOut')
const Review= require('./review')

const WorkOut = model('workOut', UserSchema)
const Review = model('review', TaskSchema)

module.exports = {
  WorkOut,
  Review
}