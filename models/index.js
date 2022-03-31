const { model } = require('mongoose')
const WorkoutSchema = require('./workout')
const ReviewSchema = require('./review')

const Workout = model('Workout', WorkoutSchema)
const Review = model('Review', ReviewSchema)

module.exports = {
  Workout,
  Review
}