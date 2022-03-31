import React from "react";
import { useNavigate } from "react-router-dom";

const YourWorkouts = (props) => {
  let navigate = useNavigate();

  const showWorkout = (workout) => {
    console.log(workout, " this is the workout");
    props.setSelectedWorkout(workout);

    navigate(`${workout._id}`);
  };
  const makeAComment = (workout) => {
    navigate(`/yourWorkouts/addComment/${workout._id}`);
  };

  console.log(props.reviews);

  return (
    <div className="workoutTitle">
      <h1>Workouts</h1>
      <button onClick={() => navigate("/yourWorkouts/addWorkout")}>
        Add Workout
      </button>
      <div className="yourWorkouts">
        {props.workouts.map((workout) => (
          <div key={workout._id} className="workouts">
            <button onClick={() => showWorkout(workout)}>
              {" "}
              Update Workout
            </button>
            <button onClick={() => props.deleteWorkout(workout)}>Delete</button>
            <button onClick={() => makeAComment(workout)}>Add Comment</button>

            <div className="workout" key={workout._id}>
              <h2>{workout.type}</h2>
              <h6>{workout.duration}Minutes</h6>
              <p>Description: {workout.description}</p>
              <div>
                <h4>Comments</h4>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/Profile")}>Back</button>
    </div>
  );
};

export default YourWorkouts;
