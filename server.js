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
app.get("/addWorkout", async (req, res) => {
    const games = await Game.find({});
    res.json(games);
  });
  
  app.post("/yourWorkouts", async (req, res) => {
    const reviews = await Review.find({});
    res.json(reviews);
  });
  
  app.post("/addWorkout", async (req, res) => {
    const newReview = await Review.create(req.body);
    await res.json(newReview);
  });



/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));