import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
// Components
import Welcome from "./components/User/WelcomePage";
import EditWorkout from "./components/EditWorkout"
import GuestLogin from "./components/User/GuestLogin";
import GuestRegister from "./components/User/GuestRegister";
import Dashboard from "./components/Dashboard";
// Utils 
import ProtectedRoute from "./Auth/ProtectedRoute";
import axiosWithAuth from "./Auth/axiosWithAuth";
// Contexts
import { WorkOutContext } from "./contexts/WorkOutContext";
import { ExerciseContext } from "./contexts/ExerciseContext";
import ExercisePage from "./components/ExercisePage";

function App(props) {
  const [workOut, setWorkOut] = useState([]);
  const [exercise, setExercise] = useState({});
  const [userId, setUserId] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/api/workouts")
      .then(res => {
        // console.log(res.data);
        setWorkOut(res.data);
        // setWorkOut(res.data);
      });
  }, [setWorkOut]);

  const addWorkout = item => {
    console.log("item passed to addWorkout in App.js", item);
    console.log("workOut in App.js", workOut);
    axiosWithAuth()
      .post("api/workouts", item)
      .then(response => {
        setWorkOut(...workOut, response.data);
        console.log(response);
      })
      .catch(err => console.log(err))
  };

  const addUserId = item => {
    setUserId(item);
    console.log("userId", userId);
  };
  /*const addExercise = item => {
    axios
      .post(
        "https://workout-journal-backend.herokuapp.com/api/workout/exercise",
        item
      )
      .then(response => {
        setExercise(...exercise, response.data);
      })
      .catch(err => console.log(err));
  };*/
  const excrcse1 = useContext(ExerciseContext);
  const wrkout1 = useContext(WorkOutContext);


  const addExercise = item => {
    axiosWithAuth()
      .post("api/workout/exercise", item)
      .then(response => {
        console.log(response)
        setExercise(response.data);
      })
      .catch(err => console.log(err))
  };

//   const deleteItem = id => {
//     console.log("delete id", id)
//     axiosWithAuth()
//       .delete(`/api/workouts/${id}`)
//       .then(res => {
//       console.log(res))
//       .catch(err => console.log(err))
//   }
   return (
    <WorkOutContext.Provider value={{ workOut, addWorkout, userId, setUserId, setWorkOut }}>
      <ExerciseContext.Provider value={{ exercise, setExercise }}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={GuestLogin} />
          <Route path="/register" component={GuestRegister} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/exercises" component={ExercisePage} />
          <Route path="/edit/:id" component={EditWorkout} />
          <header>
            <p>Workout Notes: {wrkout1.notes}</p>
            <p>Workout Date: {wrkout1.date}</p>
            <p>Exercise Name: {excrcse1.name}</p>
            <p>Exercise Reps: {excrcse1.reps}</p>
            <p>Exercise Weight: {excrcse1.weight}</p>
          </header>
        </Switch>
      </ExerciseContext.Provider>
    </WorkOutContext.Provider>
  );
}

export default App;
