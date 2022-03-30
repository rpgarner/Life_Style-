////////////// IMPORT ////////////////////
const express = require("express");
const cors = require("cors");
const db = require("./db");
const { Workout, Review } = require("./models");
const logger = require("morgan");
const res = require("express/lib/response");
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
// for test
app.get("/", (req, res) => {
  res.send("This is root!");
});
// adds workouts to api
app.post("/YourWorkouts/addWorkout", async (req, res) => {
  const newWorkout = await Workout.create(req.body);
  await res.json(newWorkout);
});
// gets workouts from api
app.get("/yourWorkouts", async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
});
//get workouts by ID to link with reviews 
app.get("/yourWorkouts/:id", async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id).populate("reviews");
  res.json(foundWorkout);
});
//put reviews in workout
app.put("/yourWorkouts/:id", async (req, res) => {
  const { id } = req.params;
  let foundWorkout = await Workout.findById(id);
  let createdReview = await Review.create(req.body);
  foundWorkout.reviews.push(createdReview._id);
  foundWorkout.save();
  res.send(foundWorkout);
});

// app.put("/yourWorkouts/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Workout.findByIdAndUpdate(
//       id,
//       req.body,
//       { new: true },
//       (err, workout) => {
//         if (err) {
//           res.status(500).send(err);
//         }
//         if (!workout) {
//           res.status(500).send("Workout  not found!");
//         }
//         return res.status(200).json(workout);
//       }
//     );
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });

// app.use('/api', routes);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

/////////////// EXPRESS SERVER LISTEN TO PORT //////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
