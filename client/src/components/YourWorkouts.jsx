import React from 'react';
import { useNavigate } from 'react-router-dom';






const YourWorkouts = (props) => {
    // const submitData = (e) => {
    //     e.preventDefault();
    //     props.addNewReview(e);
    //   };

    let navigate = useNavigate()

    const showWorkout = (workout) => {
        console.log(workout, ' this is the workout')
        props.setSelectedWorkout(workout)
        // props.setSelectedId(workout._id)
        navigate(`${workout._id}`)
    }

    // const deleteAWorkout = async (e) => {
    //     e.preventDefault();
      
    //     const deleteWorkout = {
    //       ...selectedWorkout}
    //       let deletedWorkout = await axios.delete(`http://localhost:3001/yourWorkouts/${deleteWorkout._id}`,
    //       deleteWorkout);
    //   }
      
    //   const handleDelete = (e) => {
    //     set
    //   }



    return (
        <div className='yourWorkouts'>
            Your workouts here
            {props.workouts.map((workout) => (
                <div>
               

                <div className ='workout' onClick={() => showWorkout(workout)} key={workout._id}>
                    
                    <h2>{workout.type}</h2>
                    <h6>{workout.duration}Minutes</h6>
                    <p>Description: {workout.description}</p>
                    <div>
                        <h4>Update Workout</h4>
                        
                    </div>
                  
                    
                </div>
                <button onClick={() => props.deleteWorkout(workout)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default YourWorkouts