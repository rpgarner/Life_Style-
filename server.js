////////////// IMPORT ////////////////////
const express = require("express");
const cors = require("cors");
const db = require("./db");
const { Workout, Review } = require("./models");
const logger = require("morgan");

//////// DEFINE VARIABLES /////////////
const PORT = process.env.PORT || 3001;
const app = express();

////////// MIDDLEWARE /////////////////////

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

/////////// ROUTES //////////////////////
app.get("/", (req, res) => {
  res.send("This is root!");
});
app.post("/addWorkout", async (req, res) => {
    const workouts = await Workout.find({});
    res.json(workouts);
  });
  
  app.get("/yourWorkouts", async (req, res) => {
    const reviews = await Workout.find({});
    res.json(reviews);
  });
  
  app.post("/addWorkout", async (req, res) => {
    const newReview = await Review.create(req.body);
    await res.json(newReview);
  });



/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));