import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

/////////////Diet/meals component/////
const YourDiets = (props) => {
  const navigate = useNavigate();
  ////// use state ///////
  const [diets, setDiets] = useState([]);
///////////// Read //////////////
    ///////// get diets //////
  useEffect(() => {
    async function getDiets() {
      try {
        let res = await axios.get(`/yourDiets`);
        setDiets(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDiets();
  }, []);

  return (
    <div className="workoutsTitle">
      <h1>Find a Meals</h1>
      <div className="yourWorkouts">
        {diets.map((diet) => (
          <div key={diet._id} className="workouts">
            <div className="diet">
              <h2 className="workoutTitle">{diet.Title}</h2>
              <h6>{diet.comments}</h6>
              <p>Ingredients: {diet.ingrediants}</p>
              <p>directions: {diet.directions}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/Profile")}>Back</button>
    </div>
  );
};

export default YourDiets;
