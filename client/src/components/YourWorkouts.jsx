import React from 'react';


const YourWorkouts = (props) => {
    const submitData = (e) => {
        e.preventDefault();
        props.addNewReview(e);
      };

    return (
        <div>
            Your workouts here
            {props.workouts.map((workout) => (
                <div key={workout._id}>
                    <h5>{workout.type}</h5>
                    <h6>{workout.duration}</h6>
                    <p>{workout.description}</p>
                    <form onSubmit={submitData}>
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
                    </form>
                </div>
            ))}
        </div>
    )
}

export default YourWorkouts