////////////// IMPORT ////////////////////
const express = require("express");
const cors = require("cors");
const db = require("./db");
const { Workout, Review } = require("./models");
const logger = require("morgan");
const res = require("express/lib/response");

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
app.get("/", (req, res) => {
  res.send("This is root!");
});
// app.post("/addWorkout", async (req, res) => {
//     const workouts = await Workout.find({});
//     res.json(workouts);
//   });
  
  app.get("/yourWorkouts", async (req, res) => {
    const reviews = await Workout.find({});
    res.json(reviews);
  });
  
  app.post("/YourWorkout", async (req, res) => {
    const newReview = await Review.create(req.body);
    await res.json(newReview);
  });
  
  app.put("/yourWorkouts/:id", async (req, res) => {
      const {id} = req.params;
       await Workout.findByIdAndUpdate(id, req.body, { new: true }).populate('reviews')
  })
  app.delete()


  app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));