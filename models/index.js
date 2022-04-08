const { model } = require("mongoose");
const ReviewSchema = require("./review");
const DietSchema = require("./diet");
const WorkoutSchema =require("./workout")


const Review = model("Review", ReviewSchema);
const Diet = model("Diet", DietSchema);
const Workout = model("Workout", WorkoutSchema);

module.exports = {
  Review,
  Diet,
  Workout
};
