import React, { useState, useContext } from "react";
import { ExerciseContext } from "../contexts/ExerciseContext";


const ExForm = props => {
    const { userId } = useContext(ExerciseContext);
    const [exercise, setExercise] = useState({
      name: "",
      reps: "",
      weight: "",
      muscles: ""
    });
  
    const handleChanges = event => {
      setExercise({
        ...exercise,
        [event.target.name]: event.target.value
      });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      props.addNewExercise(exercise);
      console.log("userId", userId);
      setExercise({ name: "", reps: "", weight: "", muscles: "" });
    };
  
    return (
      <div>
        <label>
          <h1>Log New Exercise</h1>
        </label>
        <form onSubmit={handleSubmit}>
            <input
            className="form-notes"
            type="text"
            id="name"
            placeholder="Exercise Name"
            name="name"
            value={exercise.name}
            onChange={handleChanges}
          />
            <input
            className="form-notes"
            type="text"
            id="reps"
            placeholder="Reps"
            name="reps"
            value={exercise.reps}
            onChange={handleChanges}
          />
            <input
            className="form-notes"
            type="text"
            id="weight"
            placeholder="Weight"
            name="weight"
            value={exercise.weight}
            onChange={handleChanges}
          />
            <input
            className="form-notes"
            type="text"
            id="muscles"
            placeholder="Muscles Targeted"
            name="muscles"
            value={exercise.muscles}
            onChange={handleChanges}
          />
          <br />
  
          <button type="submit" id="addEx">
            Create Exercise
          </button>
        </form>
      </div>
    );
  };
  
  export default ExForm;
  