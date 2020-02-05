import React, {useEffect, useState } from "react";
import styled from "styled-components";
// import { ExerciseContext } from "../contexts/ExerciseContext";
import axiosWithAuth from "../Auth/axiosWithAuth";

export default function ExerciseCard(props) {
//   const { exercise, setExercise } = useContext(ExerciseContext);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/workouts/exercises")
      .then(res => {
        setExercises(res.data);
      });
  }, [exercises]);

  return (
    <Container>
      {exercises.map(exercise => {
        return (
          <CardContainer key={exercise.id}>
              <p>{exercise.name}</p>
              <p>Reps: {exercise.reps}</p>
              <p>Weight: {exercise.weight}</p>
              <p>Muscles Targeted: {exercise.muscles}</p>
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
`;

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
`;
