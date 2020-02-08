import React, { useState } from "react";
import styled from "styled-components";

const ExForm = ({ props, addNewExercise }) => {
  const workout_id = Number(props.match.params.id);
  const user_id = Number(localStorage.getItem("user_id"));
  const [exercise, setExercise] = useState({
    name: "",
    reps: "",
    weight: "",
    muscles: "",
    workout_id: workout_id,
    user_id: user_id
  });

  const handleChanges = event => {
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewExercise(exercise);

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
        <StyledButton type="submit" id="addEx">
          Create Exercise
        </StyledButton>
      </form>
    </div>
  );
};

export default ExForm;

const StyledButton = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.4em 0.75em;
  border: none;
  border-radius: 3px;
  margin-top: 3%;
  background: #006494;
  border: 1px solid white;
  color: #fff;
`;
