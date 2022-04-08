const { model } = require("mongoose");
// const WorkoutSchema = require("./workout")
const ReviewSchema = require("./review");
const DietSchema = require("./diet");

// const Workout = model("Workout", WorkoutSchema);
const Review = model("Review", ReviewSchema);
const Diet = model("Diet", DietSchema);

module.exports = {
//   Workout,
  Review,
  Diet,
};
