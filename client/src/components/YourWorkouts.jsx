import React from 'react';


const YourWorkouts = (props) => {
    // const submitData = (e) => {
    //     e.preventDefault();
    //     props.addNewReview(e);
    //   };

    return (
        <div className='yourWorkouts'>
            Your workouts here
            {props.workouts.map((workout) => (
                <div className ='workout' key={workout._id}>
                    <h2>{workout.type}</h2>
                    <h6>{workout.duration}Minutes</h6>
                    <p>Description: {workout.description}</p>
                    <div>
                        <h4>Update Workout</h4>
                        
                    </div>
                    {/* <form onSubmit={submitData} >
                        <input
                            type='text'
                            value={props.newReview.comment}
                            onChange={props.handleChange}
                            name={"comment"}
                            placeholder={"comments"}
                            />
                             <input
                            type='text'
                            value={props.newReview.rating}
                            onChange={props.handleChange}
                            name={"rating"}
                            placeholder={"rate this workout"}
                            />
                             <input
                            type='text'
                            value={props.newReview.creator}
                            onChange={props.handleChange}
                            name={"creator"}
                            placeholder={"your name here"}
                            />
                            <button>Submit</button>
                    </form> */}
                </div>
            ))}
        </div>
    )
}

export default YourWorkouts