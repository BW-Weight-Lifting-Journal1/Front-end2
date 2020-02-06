import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WorkOutContext } from "../contexts/WorkOutContext";
import axiosWithAuth from "../Auth/axiosWithAuth";
import { Link } from "react-router-dom";

export default function WorkoutCard(props) {
  const { deleteItem } = useContext(WorkOutContext);
  const [workouts, setWorkouts] = useState([]);


  function routeToItem(ev, workout) {
    props.history.push(`/edit/${workout.id}`);
  }

  useEffect(() => {
    axiosWithAuth()
      .get("/api/workouts")
      .then(res => {
        setWorkouts(res.data);
      });
  }, [workouts]);

  const deleteHandler = (e, id) => {
    deleteItem(id);
  };

  return (
    <Container>
      {workouts.map(workout => {
        return (
          <CardContainer key={workout.id}>
            <Link to={`/exercises/${workout.id}`}>
              <p>Workout Id: {workout.id}</p>
              <p>Notes: {workout.workout_note}</p>
            </Link>
            <StyledButton onClick={e => routeToItem(e, workout)}>Edit</StyledButton>
            <StyledButton onClick={e => deleteHandler(e, workout.id)}>Delete</StyledButton>
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
  box-shadow: 9px 11px 37px 0px rgba(0,0,0,0.75);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
`;

const StyledButton = styled.button`
  background: #eca400;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.3em 0.75em;
  border: none;
  border-radius: 3px;
  margin-top: 8%;
`;
