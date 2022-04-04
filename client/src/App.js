import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import YourWorkouts from "./components/YourWorkouts";
import AddWorkout from "./components/AddWorkout";
import YourDiets from "./components/YourDiets";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateWorkout from "./components/UpdateWorkout";
import AddComment from "./components/AddComment";


function App() {
  ////////////UseState/////////
  const [workouts, setWorkouts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState({});
  const [newWorkout, setNewWorkout] = useState({
    type: "",
    duration: "",
    description: "",
  });
  
  //////////////// axios calls ///////////////////
      //////////// Create //////////
        ///// post workout //////
  const addNewWorkout = async (e) => {
    e.preventDefault();
    const currentWorkouts = workouts;
    const createdWorkout = {
      ...newWorkout,
      type: newWorkout.type,
      duration: newWorkout.duration,
      description: newWorkout.description,
    };

    let response = await axios.post(
      "http://localhost:3001/yourWorkouts/addWorkout",
      createdWorkout
    );
    currentWorkouts.push(response.data);
    setWorkouts(currentWorkouts);
    setNewWorkout({ type: "", duration: "", description: "" });
  };
            ////handle change function ///
  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

      ///////////////// Read //////////////////
        //////// get workouts ///////
  useEffect(() => {
    async function getWorkouts() {
      try {
        let res = await axios.get(`http://localhost:3001/yourWorkouts`);
        
        setWorkouts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getWorkouts();

      ////////// get reviews ////////
    async function getReviews() {
      try {
        let results = await axios.get(`http://localhost:3001/yourWorkouts/addComment`);
        setReviews(results.data);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();

      /////////// get reviews by Id ///////
      async function getReviewsById() {
        try {
          let res = await axios.get(`http://localhost:3001/yourWorkouts/addComment/${selectedWorkout._id}`)
          console.log(res, 'this is review by ID')
        } catch (error) {
          console.log(error);
        }
      }
      
  }, []);

    ////////////// Update /////////////
      //////update a workout ///////
  const updateAWorkout = async (e) => {
    e.preventDefault();
    const updateWorkout = {
      ...selectedWorkout,
    };
    let updatedWorkout = await axios.put(
      `http://localhost:3001/yourWorkouts/${selectedWorkout._id}`,
      updateWorkout
    );
    const toChangeWorkout = workouts.find(
      (workout) => workouts.id === updatedWorkout.data._id
    );
    workouts.splice(toChangeWorkout, 1, updateWorkout);
    setSelectedWorkout({ type: "", duration: "", description: "" });
  };
        /// handle update ///
  const handleUpdate = (e) => {
    setSelectedWorkout({ ...selectedWorkout, [e.target.name]: e.target.value });
    
  };

  /////////////// Delete /////////////
      ///// delete a workout ///////
  const deleteWorkout = async (workout) => {
    await axios
      .delete(`http://localhost:3001/yourWorkouts/${workout._id}`)
      .then((respond) => {
        console.log(respond);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Life Style App</h1>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/yourWorkouts"
            element={
              <YourWorkouts
                workouts={workouts}
                reviews={reviews}
                deleteWorkout={deleteWorkout}
                setSelectedWorkout={setSelectedWorkout}
                setReviews={setReviews}
              />
            }
          />
          <Route
            path="/yourWorkouts/:id"
            element={
              <UpdateWorkout
                handleUpdate={handleUpdate}
                updateAWorkout={updateAWorkout}
                selectedWorkout={selectedWorkout}
              />
            }
          />
          <Route
            path="/yourWorkouts/addWorkout"
            element={
              <AddWorkout
                newWorkout={newWorkout}
                handleChange={handleChange}
                addNewWorkout={addNewWorkout}
              />
            }
          />
          <Route
            path="/yourWorkouts/addComment/:id"
            element={<AddComment reviews={reviews}  handleUpdate={handleUpdate}
            updateAWorkout={updateAWorkout}
            selectedWorkout={selectedWorkout} />}
          />
          <Route path="/yourDiets" element={<YourDiets />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
