import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddComment = (props) => {
    const navigate = useNavigate()
 console.log(props.reviews, 'is this working ')

  return (
    <div className="workoutComment">
      <h1>Add a comment</h1>
      <form>
        <input type="text" name={"comment"} placeholder={"Make a Comment"} />
        <input type="text" name={"rating"} placeholder={"1-10"} />
        <input type="text" name={"creator"} placeholder={"Name"} />
        <button>Submit</button>
      </form>
      <div className="yourWorkouts">
        {props.reviews.map((review) => (
          <div key={review._id} className="workouts">
            <div className="workout" key={review._id}>
              <h2 className="workoutTitle">{review.creator}</h2>
              <p>{review.comment}</p>
              <p>Description: {review.rating}</p>
              
            </div>
          </div>
          ))}
          </div>
          
      <button onClick={() => navigate('/yourWorkouts')}>Back</button>
    </div>
  );
};

export default AddComment;
