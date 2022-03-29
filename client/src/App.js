import React from 'react';
import './styles/App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'
import YourWorkouts from './components/YourWorkouts';
import AddWorkout from './components/AddWorkout';
import { useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [workouts, setWorkouts] = useState([])
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState({
    comment: "",
    rating: 0,
    creater: ""
  });

  useEffect(() => {
    async function getWorkouts() {
      try {
        let res = await axios.get(`http://localhost:3001/yourWorkouts`);
        console.log(res)
        setWorkouts(res.data);
        
      } catch (error) {
        console.log(error);
      }
    }
    getWorkouts();

    async function getReviews() {
      try {
        let res = await axios.get(`http://localhost:3001/yourWorkouts`);
        setReviews(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, []);
  const addNewReview = async (e) => {
    e.preventDefault();
    const currentReviews = reviews;
    const createdReview = {
      ...newReview,
      comment: newReview.comment,
      rating: newReview.rating,
      creater: newReview.creator,
    };

    let response = await axios.post("http://localhost:3001/reviews/new",createdReview);
    currentReviews.push(response.data);
    setReviews(currentReviews);
    setNewReview({ name: "", review: "", rating: "" });
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Life Style App</h1>
        <Nav /> 
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/profile' element={ <Profile /> } /> 
          <Route path='/yourWorkouts' element={ <YourWorkouts workouts={workouts} reviews={reviews}/>} />
          <Route path='/addWorkout' element={ <AddWorkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
