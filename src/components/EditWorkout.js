import React, { useState, useContext, useEffect } from "react";
import { WorkOutContext } from "../contexts/WorkOutContext";
import { Div, Main } from "./User/theme";
import styled from "styled-components";

function EditWorkout(props) {
  const { workOut, updateWorkout } = useContext(WorkOutContext);
  const [workout, setWorkout] = useState({
    workout_notes: "",
    workout_date: ""
  });
  useEffect(() => {
    const editingItem = workOut.find(thing => {
      return thing.id === Number(props.match.params.id);
    });
    if (editingItem) {
      setWorkout(editingItem);
    }
  }, [workOut, props.match.params]);

  const handleChanges = event => {
    event.persist();
    setWorkout({
      ...workout,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = Number(props.match.params.id);
    event.preventDefault();
    updateWorkout(id, workout);
  };

  return (
    <Div>
      <Main>
        <FormDiv>
          <label>
            <h1>Edit Workout</h1>
          </label>
          <form onSubmit={handleSubmit}>
            <input
              className="form-notes"
              type="text"
              id="notes"
              placeholder="Notes"
              name="workout_note"
              value={workout.workout_note}
              onChange={handleChanges}
            />
            <br />
            <StyledButton>Edit Workout</StyledButton>
          </form>
        </FormDiv>
      </Main>
    </Div>
  );
}
export default EditWorkout;

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

const StyledButton = styled.button`
  background: #006494;
  font-size: 1.1em;
  margin: 0.5em;
  padding: 0.4em 0.75em;
  border: none;
  border-radius: 3px;
  margin-top: 4%;
`;
