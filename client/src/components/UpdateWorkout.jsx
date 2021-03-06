import { useNavigate } from "react-router-dom";

////////////// Update workout component ///////////
const UpdateWorkout = (props) => {
  let navigate = useNavigate();
  /////// on submit function ///////
  const submitData = (e) => {
    e.preventDefault();
    props.updateAWorkout(e);
    navigate("/yourWorkout");
    window.location.reload()
  };

  return (
    <div className="pageTitle">
      <h2>update workout</h2>
      <div>
        <form onSubmit={submitData}>
          <input
            type="text"
            value={props.updateAWorkout.type}
            onChange={props.handleUpdate}
            name={"type"}
            placeholder={"type of workout"}
          />
          <input
            type="text"
            value={props.updateAWorkout.duration}
            onChange={props.handleUpdate}
            name={"duration"}
            placeholder={"minutes"}
          />
          <input
            type="text"
            value={props.updateAWorkout.description}
            onChange={props.handleUpdate}
            name={"description"}
            placeholder={"workout info"}
          />
          <button>Submit</button>
        </form>
      </div>
      <button onClick={() => navigate('/yourWorkout')}>Back</button>
    </div>
  );

};

export default UpdateWorkout;
