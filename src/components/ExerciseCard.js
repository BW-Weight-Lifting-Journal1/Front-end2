import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { ExerciseContext } from "../contexts/ExerciseContext";
import axiosWithAuth from "../Auth/axiosWithAuth";

export default function ExerciseCard({ props }) {
    //   const { exercise, setExercise } = useContext(ExerciseContext);
    const [exercises, setExercises] = useState([]);
    const workOut_id = props.match.params.id
    const user_id = localStorage.getItem("user_id")
    useEffect(() => {
        axiosWithAuth()
            .get(`/api/workouts/${user_id}`)
            .then(res => {
                setExercises(res.data);
            });
    }, [user_id]);

    // console.log("ExerciseCard", props)
    return (
        <Container>
            {exercises.map(exercise => {
                return (
                    <CardContainer key={exercise.id}>
                        <p>{exercise.exercise_name}</p>
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
`;

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
`;
