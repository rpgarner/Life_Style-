import React from "react";
import { useNavigate } from "react-router-dom";

////////////// Profile component ////////////////
const Profile = () => {
  let navigate = useNavigate();

  return (
    <div className="profilePage">
      <h1 className="homePage">Profile</h1>
      <div className="profileArticles">
        <div className="article" onClick={() => navigate("/yourWorkout")}>
          <h3>Workouts</h3>
          <img
            src="https://thumbs.dreamstime.com/b/morning-workout-routine-home-gym-morning-workout-routine-home-gym-fitness-motivation-muscle-training-concept-man-122902002.jpg"
            alt="workout"
          ></img>
        </div>
        <div className="article" onClick={() => navigate('/yourDiet')}>
          <h3>Diets</h3>
          <img
            src="https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg"
            alt="food"
          />
        </div>
        <div className="article">
          <h3>Goals</h3>
          <img
            src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_705,w_1254,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/People%20Managers/Setting_goals_photo_vx3zxs.jpg"
            alt="goals"
          />
        </div>
      </div>
      <button onClick={() => navigate("/")}>Log out</button>
    </div>
  );
};

export default Profile;
