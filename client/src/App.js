import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import YourWorkouts from "./components/YourWorkouts";
import AddWorkout from "./components/AddWorkout";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateWorkout from "./components/UpdateWorkout";

function App() {
  ////////////UseState/////////
  const [workouts, setWorkouts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState({
    type: "",
    duration: "",
    description: "",
  });
  // const [newReview, setNewReview] = useState({
  //   comment: "",
  //   rating: "",
  //   creater: "",
  // });
  const [newWorkout, setNewWorkout] = useState({
    type: "",
    duration: "",
    description: "",
  });
  console.log(newWorkout)
  ////////////useEffect to get information
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

    async function getReviews() {
      try {
        let res = await axios.get(`http://localhost:3001/yourWorkouts/`);
        setReviews(res.data.reviews);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, []);
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

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const updateAWorkout = async (e) => {
    e.preventDefault();
   
    const updateWorkout = {
      ...selectedWorkout,
      type: selectedWorkout.type,
      duration: selectedWorkout.duration,
      description: selectedWorkout.description,

    };

    let updatedWorkout = await axios.put(
      `http://localhost:3001/yourWorkouts/${updateWorkout._id}`,
       updateWorkout
    );
    const toChangeWorkout = workouts.find((workout) => workouts.id === updatedWorkout.data._id);
    workouts.splice(toChangeWorkout,1, updateWorkout)
    setSelectedWorkout({ type: "", duration: "", description: "" });
  };

  const handleUpdate = (e) => {
    setSelectedWorkout({ ...selectedWorkout, [e.target.name]: e.target.value });
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
            element={<YourWorkouts workouts={workouts} reviews={reviews} />}
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
