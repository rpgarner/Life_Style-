import React from "react";

const Profile = () => {
  return (
    <div className="profilePage">
      <h1 className="homePage">Profile</h1>
      <div className="profileArticles">
        <div className="article">
          <h3>Workouts</h3>
          <img
            src="https://thumbs.dreamstime.com/b/morning-workout-routine-home-gym-morning-workout-routine-home-gym-fitness-motivation-muscle-training-concept-man-122902002.jpg"
            alt="workout img"
          ></img>
        </div>
        <div className="article">
          <h3>Diets</h3>
          <img
            src="https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg"
            alt="food image"
          />
        </div>
        <div className="article">
          <h3>Goals</h3>
          <img
            src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_705,w_1254,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/People%20Managers/Setting_goals_photo_vx3zxs.jpg"
            alt="goals image"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
