const { Workout, Review, Diet } = require("../models/index");
///////////Creates///////////
const addWorkout = async (req, res) => {
  const newWorkout = await Workout.create(req.body);
  await res.json(newWorkout);
};
const postAComment = async (req, res) => {
    const { id } = req.params;
    let foundWorkout = await Workout.findById(id);
    let createdReview = await Review.create(req.body);
    foundWorkout.reviews.push(createdReview);
    foundWorkout.save();
    res.json(foundWorkout.populate("reviews"));
  };
// read
// gets workouts from api
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

const getReviews = async (req, res) => {
  const getreviews = await Review.find({});
  res.json(getreviews);
};

const getDiets = async (req, res) => {
    const diets = await Diet.find({});
    
    res.json(diets);
  };

const getWorkoutsForComment = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};
// get workouts by ID to link with reviews
const getWorkoutbyID = async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id).populate("reviews");
  res.json(foundWorkout);
};

// Update
// put reviews in workout

//////////update workout/////////
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(foundWorkout);
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  let deletedWorkout = await Workout.findByIdAndDelete(id);
  res.status(200).send(deletedWorkout);
};

module.exports = {
  getWorkouts,
  addWorkout,
  getReviews,
  getWorkoutsForComment,
  getWorkoutbyID,
  postAComment,
  updateWorkout,
  deleteWorkout,
  getDiets,
};
