const { model } = require("mongoose");
const ReviewSchema = require("./review");
const DietSchema = require("./diet");
const ExerciseSchema =require("./exercise")


const Review = model("review", ReviewSchema);
const Diet = model("diet", DietSchema);
const Exercise = model("exercise", ExerciseSchema);

module.exports = {
  Review,
  Diet,
  Exercise,
};
