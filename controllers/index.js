const { Workout, Review, Diet } = require("../models/index");

////////////////////////Create////////////////
        /////// Workout //////////
const addWorkout = async (req, res) => {
  const newWorkout = await Workout.create(req.body);
  await res.json(newWorkout);
};
        ////////Review/Comment//////////
const postAComment = async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id);
  let createdReview = await Review.create(req.body);
  foundWorkout.reviews.push(createdReview);
  foundWorkout.save();
  res.json(createdReview);
};

///////////////// read //////////////////////////
        ///// get workouts ///////
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};
        //////// get reviews //////
const getReviews = async (req, res) => {
  const getreviews = await Review.find({});
  res.json(getreviews);
};
        ////////  get diets ////////
const getDiets = async (req, res) => {
  const diets = await Diet.find({});
  res.json(diets);
};
        //////// get workouts for comments ///////
const getWorkoutsForComment = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};
        /////// get workout by ID to populate ////////
const getWorkoutbyID = async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id).populate("reviews");
  res.json(foundWorkout);
};
         /////// get review by ID ////////  
const getReviewsById = async (req, res) => {
    const { id } = req.params;
    let reviewById = await Review.findById(id)
    res.json(reviewById)
};

/////////////////////// Update ///////////////////////

    ////////// put workout/////////
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send(foundWorkout);
};
//////////////////// Delete //////////////////////
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
  getReviewsById,
};
