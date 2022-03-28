const { model } = require('mongoose')
const WorkoutSchema = require('./workout')
const ReviewSchema= require('./review')

const Workout = model('workout', WorkoutSchema)
const Review = model('review', ReviewSchema)

module.exports = {
  Workout,
  Review
}