/////////////// IMPORT /////////////////////

const db = require("../db");
const { Workout, Review } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// Workout seed /////////////////////
const main = async () => {
   
  const reviews = [
    {
      
    }
  ];

  await Review.insertMany(reviews);
  console.log("Created some reviews for workouts");
};
const run = async () => {
  await main();
  db.close();
};

run();