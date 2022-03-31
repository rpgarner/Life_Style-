const { model } = require('mongoose')
const WorkoutSchema = require('./workout.js')
const ReviewSchema = require('./review.js')

const Workout = model('Workout', WorkoutSchema)
const Review = model('Review', ReviewSchema)

module.exports = {
  Workout,
  Review
}