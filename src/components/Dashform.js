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
    console.log(userId);
    setWorkout({ name: "", weight: "", reps: "" });
  };

  return (
    <div>
      <label>
        <h1>Journal Entry</h1>
      </label>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Name Of Workout"
          name="name"
          value={workout.name}
          onChange={handleChanges}
          required
        />
        <br />
        <br />
        <input
          className="form-numbers"
          type="text"
          id="weight"
          placeholder="Weight"
          name="weight"
          value={workout.weight}
          onChange={handleChanges}
          required
        />
        <input
          className="form-numbers"
          type="text"
          id="reps"
          placeholder="Reps"
          name="reps"
          value={workout.reps}
          onChange={handleChanges}
          required
        />
        <br />
        <br />
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
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default Form;
