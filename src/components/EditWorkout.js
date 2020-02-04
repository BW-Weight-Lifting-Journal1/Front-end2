import React, { useState, useContext, useEffect } from "react";
import { WorkOutContext } from "../contexts/WorkOutContext";
import axiosWithAuth from "../Auth/axiosWithAuth";

function EditWorkout(props) {
    const { userId, workOut } = useContext(WorkOutContext);
    const [workout, setWorkout] = useState({
        workout_note: "",
        workout_date: ""
    });
    useEffect(() => {
        const editingItem = workOut.find(thing => {
            return thing.id === Number(props.match.params.id)
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

    const handleSubmit = (id, event) => {
        event.preventDefault();
        const editId = Number(props.match.params.id)
        event.preventDefault();
        axiosWithAuth()
            .put(`/workouts/${editId}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        setWorkout({ name: "", weight: "", reps: "" });
    };
    console.log("workOut", workOut
    )
    console.log("editingItem", workout, props.match.params.id)

    return (
        <div>
            <label>
                <h1>Journal Entry</h1>
            </label>
            <form onSubmit={handleSubmit}>
                {/* <br />
                <input
                    type="text"
                    id="name"
                    placeholder="Name Of Workout"
                    name="name"
                    value={workout.name}
                    onChange={handleChanges}
                    required
                />
                <br />
                <br />
                <input
                    className="form-numbers"
                    type="text"
                    id="weight"
                    placeholder="Weight"
                    name="weight"
                    value={workout.weight}
                    onChange={handleChanges}
                    required
                />
                <input
                    className="form-numbers"
                    type="text"
                    id="reps"
                    placeholder="Reps"
                    name="reps"
                    value={workout.reps}
                    onChange={handleChanges}
                    required
                />
                <br />
                <br /> */}
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

                <button type="submit" id="addWorkout">
                    Edit Workout
        </button>
            </form>
        </div>
    );
};

export default EditWorkout;
