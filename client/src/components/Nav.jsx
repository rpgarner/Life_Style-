import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  
    return (
     <nav>
        <div className ='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/Profile'>Profile</Link>
            <Link to='/yourWorkouts'>Workouts</Link>
            <Link to='/yourWorkouts/addWorkout'>Add a workout </Link>
        </div>

     </nav>
    )
  }
  
  export default Nav