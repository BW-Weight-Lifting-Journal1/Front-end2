import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WorkOutContext } from "../contexts/WorkOutContext";
import axiosWithAuth from "../Auth/axiosWithAuth";
const WorkoutCard = props => {
  const { workOut } = useContext(WorkOutContext);
  const [workouts, setWorkouts] = useState([]);
  console.log("WorkOut in WorkoutCard", workOut);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/workouts")
      .then(res => {
        console.log(res.data);
        setWorkouts(res.data);
      });
  }, []);
  return (
    <Container>
      {workouts.map(workout => {
        return (
          <CardContainer key={workout.name}>
            <h1>{workout.workout_date}</h1>
            <h2>{workout.name}</h2>
            <p>Weight: {workout.workout_weight}</p>
            <p>Reps: {workout.workout_reps}</p>
            <p>Notes: {workout.workout_note}</p>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default WorkoutCard;

const CardContainer = styled.div`
  background: white;
  width: 200px;
  height: 350px;
  border-radius: 60px;
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
`;
