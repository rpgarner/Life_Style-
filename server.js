////////////// IMPORT ////////////////////
const express = require("express");
const cors = require("cors");
const db = require("./db");
const { Workout, Review } = require("./models/index.js");
const logger = require("morgan");
const routes = require("./routes");

//////// DEFINE VARIABLES /////////////
const PORT = process.env.PORT || 3001;
const app = express();

////////// MIDDLEWARE /////////////////////

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.static(`${__dirname}/client/build`));

/////////// ROUTES //////////////////////

// Create
  //creates wrokout to api
app.post("/YourWorkouts/addWorkout", async (req, res) => {
  const newWorkout = await Workout.create(req.body);
  await res.json(newWorkout);
});
// read
  // gets workouts from api
app.get("/yourWorkouts", async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
});

app.get("/yourReviews", async (req,res) => {
  const reviews = await Review.find({});
  res.send(reviews)
})

app.get("/yourWorkouts/addComment", async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
});
  // get workouts by ID to link with reviews 
app.get("/yourWorkouts/:id", async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id).populate("reviews");
  res.json(foundWorkout);
});

// app.get("/yourWorkouts/")
// Update
  // put reviews in workout
app.post("/yourWorkouts/addComment/:id", async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id);
  let createdReview = await Review.create(req.body);
  foundWorkout.reviews.push(createdReview);
  foundWorkout.save();
  res.json(foundWorkout.populate('reviews'));
});
 //////////update workout/////////
app.put("/yourWorkouts/:id", async (req,res) => {
  const {id} = req.params;
  let foundWorkout = await Workout.findByIdAndUpdate(id, req.body, { new: true});
  res.send(foundWorkout)
})

app.delete('/yourWorkouts/:id', async (req,res) => {
  const { id } = req.params;
  let deletedWorkout = await Workout.findByIdAndDelete(id)
  res.status(200).send(deletedWorkout)
})


// app.use('/api', routes);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
