import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddComment = (props) => {
    const navigate = useNavigate()
  async function getReviews() {
    try {
      let res = await axios.get(`http://localhost:3001/yourWorkouts/`);
      props.setReviews(res.data.reviews);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  getReviews();

  return (
    <div className="workoutTitle">
      <h1>Add a comment</h1>
      <form>
        <input type="text" name={"comment"} placeholder={"Make a Comment"} />
        <input type="text" name={"rating"} placeholder={"1-10"} />
        <input type="text" name={"creator"} placeholder={"Name"} />
        <button>Submit</button>
      </form>
      <button onClick={() => navigate('/yourWorkouts')}>Back</button>
    </div>
  );
};

export default AddComment;
