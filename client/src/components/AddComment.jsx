

const AddComment = () => {

    return (
        <div>
            <h1>Add a comment</h1>
            <form >
        <input
          type="text"

          name={"comment"}
          placeholder={"Make a Comment"}
        />
        <input
          type="text"
       
          name={"rating"}
          placeholder={"1-10"}
        />
        <input
          type="text"

          name={"creator"}
          placeholder={"Name"}
        />
        <button  >Submit</button>
      </form>
        </div>
    )
}

export default AddComment