import React from "react";
import { useNavigate } from "react-router-dom";

////////////// Add a Workout component ////////////
const AddWorkout = (props) => {
  let navigate = useNavigate();
      ///////// onSubmit function ////////
  const submitData = (e) => {
    e.preventDefault();
    props.addNewWorkout(e);
    navigate("/yourWorkout");
  };

  return (
    <div className="pageTitle">
      <h3>Create workout page</h3>
      <form onSubmit={submitData}>
        <input
          type="text"
          value={props.newWorkout.type}
          onChange={props.handleChange}
          name={"type"}
          placeholder={"type of workout"}
        />
        <input
          type="text"
          value={props.newWorkout.duration}
          onChange={props.handleChange}
          name={"duration"}
          placeholder={"minutes"}
        />
        <input  type="text"
          value={props.newWorkout.description}
          onChange={props.handleChange}
          name={"description"}
          placeholder={"workout info"}
          size="50"
          >
          </input>
        <button>Submit</button>
      </form>
      <button onClick={() => navigate('/yourWorkout')}>Back</button>
    </div>
  );
};

export default AddWorkout;
