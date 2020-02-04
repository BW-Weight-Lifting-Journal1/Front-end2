import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WorkOutContext } from "../contexts/WorkOutContext";
import axiosWithAuth from "../Auth/axiosWithAuth";

export default function WorkoutCard(props) {
  const { workOut, setWorkOut } = useContext(WorkOutContext);
  const [workouts, setWorkouts] = useState([]);
  // console.log("WorkOut in WorkoutCard", workOut);

  function routeToItem(ev, workout) {
    // console.log(props);
    props.history.push(`/edit/${workout.id}`);
  }
  useEffect(() => {
    axiosWithAuth()
      .get("/api/workouts")
      .then(res => {
        // console.log(res.data);
        // setWorkOut(res.data);
        setWorkouts(res.data);
      });
  }, [workouts]);

  return (
    <Container>
      {workouts.map(workout => {
        return (
          <CardContainer key={workout.id}>
            <p>{workout.id}</p>
            <p>Notes: {workout.workout_note}</p>
            <button onClick={e => routeToItem(e, workout)}>Edit</button>
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
