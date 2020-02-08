import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ExerciseContext } from "../contexts/ExerciseContext";
import axiosWithAuth from "../Auth/axiosWithAuth";

export default function ExerciseCard({ props }) {
  const { setExercise, exercise } = useContext(ExerciseContext);
  const [exercises, setExercises] = useState([]);
  const user_id = Number(localStorage.getItem("user_id"));

  useEffect(() => {
    axiosWithAuth()
      .get(`api/workouts/${user_id}`)
      .then(res => {
        setExercises(res.data);

        console.log("get", res);
      });
  }, [exercise, setExercise, user_id]);

  return (
    <Container>
      {exercises.map(exercise => {
        return (
          <CardContainer key={exercise.id}>
            <h3>{exercise.exercise_name}</h3>
            <p>Reps: {exercise.exercise_reps}</p>
            <p>Weight: {exercise.exercise_weight}</p>
            <p>Muscles Targeted: {exercise.muscles_targeted}</p>
          </CardContainer>
        );
      })}
    </Container>
  );
}

const CardContainer = styled.div`
  background: white;
  width: 200px;
  height: 350px;
  border-radius: 60px;
  margin: 20px;
  text-align: center;

  p {
    margin: 3px 3px 20px 3px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
`;
