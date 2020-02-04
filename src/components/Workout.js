import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Auth/axiosWithAuth";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
`;

const Workout = props => {
  console.log(props);
  const [workout, setWorkout] = useState(null);

  const fetchWorkout = id => {
    axiosWithAuth()
      .get(`/api/workouts/${id}`)
      .then(res => setWorkout(res.data))
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    fetchWorkout(props.match.params.id);
  }, [props.match.params.id]);

  const handleChange = e =>
    setWorkout({ ...workout, [e.target.name]: e.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(`/api/workouts/${workout.id}`, workout)
      .then(res => {
        console.log(res);
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="workout"
        placeholder="Workout Name"
        value={workout.exercise_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="reps"
        placeholder="reps"
        value={workout.exercise_reps}
        onChange={handleChange}
      />
      <input
        type="text"
        name="weight"
        placeholder="Exercise Weight"
        value={workout.exercise_weight}
        onChange={handleChange}
      />
      <input 
        type='text'
        name='notes'
        placeholder='Exercise Notes'
        value={workout.workout_notes}
      />

      <button type="submit">Update Workout</button>
    </Form>
  );
};

export default Workout;
