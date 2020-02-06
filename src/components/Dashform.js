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
    setWorkout({ notes: "" });
  };

  return (
    <div>
      <label>
        <h1 className="form-header">Journal Entry</h1>
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
  font-size: 1em;
  margin: 0.5em;
  padding: .4em 0.75em;
  border: none;
  border-radius: 3px;
  margin-top: 3%;
  background: #eca400;
  border: 1px solid white;
  color: #fff;
  
`;
