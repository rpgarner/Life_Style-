import React from "react";
import { useNavigate } from "react-router-dom";

////////////// Your Workouts Component //////////////////
const YourWorkouts = (props) => {
  let navigate = useNavigate();
  /////// this is to navigate to a workout id///////
  const showWorkout = (workout) => {
    
    props.setSelectedWorkout(workout);
    navigate(`${workout._id}`);
  };
  let deleteWorkout = (workout) => {
    props.deleteWorkout(workout) 
    window.location.reload()
  }
  ////////navigate to comment page///////
  const makeAComment = (workout) => {
    
    navigate(`/yourWorkout/addComments/${workout._id}`);
  };

  return (
    <div className="workoutsTitle">
      <button onClick={() => navigate("/yourWorkout/addWorkouts")}>
        Add Workout
      </button>
      <h1>Workouts</h1>
      <div className="yourWorkouts">
        {props.workouts.map((workout) => (
          <div key={workout._id} className="workouts">
            <button onClick={() => showWorkout(workout)}>Update Workout</button>
            <button onClick={() => deleteWorkout(workout)}>Delete</button>
            <button onClick={() => makeAComment(workout)}>Add Comment</button>
            <div className="workout" key={workout._id}>
              <h2 className="workoutTitle">{workout.type}</h2>
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
