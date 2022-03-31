

const AddComment = () => {

    return (
        <div>
            <h1>Add a comment</h1>
            <form >
        <input
          type="text"
        //   value={props.newWorkout.type}
        //   onChange={props.handleChange}
          name={"comment"}
          placeholder={"Make a Comment"}
        />
        <input
          type="text"
        //   value={props.newWorkout.duration}
        //   onChange={props.handleChange}
          name={"rating"}
          placeholder={"1-10"}
        />
        <input
          type="text"
        //   value={props.newWorkout.description}
        //   onChange={props.handleChange}
          name={"creator"}
          placeholder={"Name"}
        />
        <button>Submit</button>
      </form>
        </div>
    )
}

export default AddComment