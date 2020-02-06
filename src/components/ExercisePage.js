import React, { useContext } from "react";
import ExForm from "./ExerciseForm";
import { Div, Main } from "./User/theme";
import ExerciseCard from "./ExerciseCard";
import styled from "styled-components";
import { ExerciseContext } from "../contexts/ExerciseContext";

export default function ExercisePage(props) {
    //   const [exercise, setExercise] = useState([]);
    const { addExercise, userId } = useContext(ExerciseContext);
    const user_id = localStorage.getItem("user_id")

    const addNewExercise = exercise => {
        const newExercise = {
            exercise_name: exercise.name,
            exercise_reps: exercise.reps,
            exercise_weight: exercise.weight,
            muscles_targeted: exercise.muscles,
            "workout_id": exercise.workout_id,
            "user_id": user_id
        };
        addExercise([newExercise]);
    };
    console.log(props)
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
                    <ExForm props={props} addNewExercise={addNewExercise} />
                </FormDiv>
            </Main>
            <CardList>
                <ExerciseCard props={props} />
            </CardList>
        </Div>
    );
}