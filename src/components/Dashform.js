import React, { useState, useContext } from "react";
import { WorkOutContext } from "../contexts/WorkOutContext";

const Form = props => {
  const { userId } = useContext(WorkOutContext);
  const [workout, setWorkout] = useState({
    date: Date(),
    name: "",
    weight: "",
    reps: "",
    notes: ""
  });

  const handleChanges = event => {
    setWorkout({
      ...workout,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewWorkout(workout);
    console.log("userId", userId);
    setWorkout({ name: "", weight: "", reps: "" });
  };

  return (
    <div>
      <label>
        <h1>Journal Entry</h1>
      </label>
      <form onSubmit={handleSubmit}>
        <input
          className="form-notes"
          type="text"
          id="notes"
          placeholder="Notes"
          name="notes"
          value={workout.notes}
          onChange={handleChanges}
        />
        <br />

        <button type="submit" id="addWorkout">
          New Workout
        </button>
      </form>
    </div>
  );
};

export default Form;
