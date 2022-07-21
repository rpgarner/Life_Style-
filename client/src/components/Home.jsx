import React from "react";
import { useNavigate } from "react-router-dom";

//////////////// Home Component /////////////
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="homePage">
        <p>
          Welcome to Life Style App where your log and find workouts, diets, and
          goals.{" "}
        </p>
      </div>
      <div className="homePage">
        <p>
          "I dont know about you but I have tried so many work out programs,
          diet regimets, but they are always temporary, as soon as the program
          is done it is hard to continue. Lets get really, it is hard to plan
          out your life. We believe that the best porogram, is something that
          fits your life style, is easy to maintain/plan, and is a life style
          that last"
        </p>
      </div>
      <div className="homePage">
        <p>Let's change our life Style</p>
          <button onClick={() => navigate("/Profile")}>Enter</button>
      </div>
    </div>
  );
};

export default Home;
