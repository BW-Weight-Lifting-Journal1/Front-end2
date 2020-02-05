import React, { useContext } from "react";
import ExForm from "./ExerciseForm";
import { Div, Main } from "./User/theme";
import ExerciseCard from "./ExerciseCard";
import styled from "styled-components";
import { WorkOutContext } from "../contexts/WorkOutContext";

export default function ExercisePage(props) {
//   const [exercise, setExercise] = useState([]);
  const {setExercise, userId } = useContext(WorkOutContext);

  const addNewExercise = exercise => {
    const newExercise = {
      exercise_name: exercise.name,
      exercise_reps: exercise.reps,
      exercise_weight: exercise.weight,
      muscles_targeted: exercise.muscles,
      "user_id": userId
    };
    setExercise([newExercise]);
  };

  const FormDiv = styled.div`
    margin: auto;
    text-align: center;
    width: 800px;
    height: 400px;
    background: #eca400;
    border-radius: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
  `;

  const CardList = styled.div`
    background: #006494;
    margin: auto;
    margin-top: 20px;
    width: 80%;
    height: 800px;
    border-radius: 60px;
  `;

  return (
    <Div>
      <Main>
        <FormDiv>
          <ExForm addNewExercise={addNewExercise} />
        </FormDiv>
      </Main>
      <CardList>
        <ExerciseCard history={props.history} />
      </CardList>
    </Div>
  );
}
