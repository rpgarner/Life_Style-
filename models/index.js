const { model } = require('mongoose')
const WorkoutSchema = require('./workout.js')
const ReviewSchema = require('./review.js')

const Workout = model('workout', WorkoutSchema)
const Review = model('review', ReviewSchema)

module.exports = {
  Workout,
  Review
}