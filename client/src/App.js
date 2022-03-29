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
  return (
    <div className="App">
      <header className="App-header">
        <Nav /> 
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/profile' element={ <Profile /> } /> 
          <Route path='/yourWorkouts' element={ <YourWorkouts />} />
          <Route path='/addWorkout' element={ <AddWorkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
