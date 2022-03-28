/////////////// IMPORT /////////////////////

const db = require("../db");
const { WorkOut } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// Workout seed /////////////////////
const main = async () => {
   
  const workouts = [
    {
    
    },
   
  ];

  await WorkOut.insertMany(workouts);
  console.log("Created some games/rides!");
};
const run = async () => {
  await main();
  db.close();
};

run();
