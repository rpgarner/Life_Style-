/////////////// IMPORT /////////////////////

const db = require("../db");
const { Workout } = require("../models");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/////////////// Workout seed /////////////////////
const main = async () => {
   
  const workouts = [
    {
        type: 'AMRAP (complete as many rounds as possible)',
        duration: 20,
        description: '5 strict chest to bar pull ups, 10 ring push ups, 20 box step ups ',
        
    },
    {
        type: 'Barbell lunges and double unders',
        duration: 15,
        description: '15 barbell lounges, 75 double unders',
       
    },
    {
        type: 'AMRAP',
        duration: 30,
        description: '10 wall ball shots, 10 toes to bars, 10 box jumps',
       
    },
    {
        type: 'Hang Squat clean 7x3',
        duration: 15,
        description: 'Hang squat clean: 3-3-3-3-3-3-3 reps',
       
    },
    {
        type: 'Run and pull ups',
        duration: 21,
        description: 'as many rounds as possible: run 400/200/100 meters (go down in distance after each 7 minutes), max rep strict pull up (run after you break a set)',
       
    }
   
  ];

  await Workout.insertMany(workouts);
  console.log("Created some games/rides!");
};
const run = async () => {
  await main();
  db.close();
};

run();
