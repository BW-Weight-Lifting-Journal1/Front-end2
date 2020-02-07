import React, { useContext } from "react";
import Form from "./Dashform";
import WorkoutCard from "./WorkoutCard";
import { Div, Main } from "./User/theme";
import styled from "styled-components";
import { WorkOutContext } from "../contexts/WorkOutContext";
import Navigation from "./Nav";

export default function Dashboard(props) {

  const { addWorkout } = useContext(WorkOutContext);
  const user_id = localStorage.getItem("user_id")
  console.log("local Storage userId", user_id)

  const addNewWorkout = work => {
    const newWorkout = {
      workout_note: work.notes,
      workout_date: Date(),
      "user_id": user_id
    };
    addWorkout([newWorkout]);
    console.log("newWorkout", newWorkout)
  };

  return (
    <Div>
      <Main>
        <Navigation />
        <FormDiv>
          <Form addNewWorkout={addNewWorkout} />
        </FormDiv>
      </Main>
      <CardList>
        <WorkoutCard history={props.history} />
      </CardList>
    </Div>
  );
}


const FormDiv = styled.div`
    margin: auto;
    text-align: center;
    width: 800px;
    height: 250px;
    background: #eca400;
    border-radius: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    border: 2px solid white;
  `;

const CardList = styled.div`
    background: #006494;
    margin: auto;
    margin-top: 20px;
    width: 80%;
    height: 800px;
    border-radius: 60px;
    border: 1px solid white;
  `;