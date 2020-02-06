import React, { useState } from "react";
import styled from "styled-components";

const Form = props => {
  const [workout, setWorkout] = useState({
    date: Date(),
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
    console.log("journal entry", workout)
    setWorkout({ notes: "" });
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
        <StyledButton id="addWorkout">
          New Workout
        </StyledButton>
      </form>
    </div>
  );
};

export default Form;

const StyledButton = styled.button`
  background: #02848E;
  font-size: 1em;
  margin: 0.5em;
  padding: .4em 0.75em;
  border: none;
  border-radius: 3px;
  margin-top: 3%;
`;
