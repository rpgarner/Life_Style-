import React from 'react';


const YourWorkouts = (props) => {

    return (
        <div>
            Your workouts here
            {props.workouts.map((workout) => (
                <div key={workout._id}>
                    <h5>{workout.type}</h5>
                    <h6>{workout.duration}</h6>
                    <p>{workout.description}</p>
                </div>
            ))}
        </div>
    )
}

export default YourWorkouts