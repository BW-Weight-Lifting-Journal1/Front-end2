import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Welcome from "./components/User/WelcomePage";
import GuestLogin from "./components/User/GuestLogin";
import GuestRegister from "./components/User/GuestRegister";
import ProtectedRoute from "./Auth/ProtectedRoute";
import axiosWithAuth from "./Auth/axiosWithAuth";
// Contexts
import { WorkOutContext } from "./contexts/WorkOutContext";
import { ExcerciseContext } from "./contexts/ExcerciseContext";
import Dashboard from "./components/Dashboard";

function App() {
  const [workOut, setWorkOut] = useState([]);
  const [excercise, setExcercise] = useState({});
  const [userId, setUserId] = useState();

  const addWorkout = item => {
    console.log("item passed to addWorkout in App.js", item);
    // setWorkOut(...workOut, item);
    console.log("workOut in App.js", workOut);
    axiosWithAuth()
      .post("api/workouts", item)
      .then(response => {
        setWorkOut(response.data);
        console.log(response);
      })
      .catch(err => console.log(err));
  };
  const addUserId = item => {
    setUserId(item);
    console.log("userId", userId);
  };
  const addExcercise = item => {
    // axios
    //   .post(
    //     "https://workout-journal-backend.herokuapp.com/api/workout/excercise",
    //     item
    //   )
    //   .then(response => {
    //     setExcercise(response.data);
    //   })
    //   .catch(err => console.log(err));
  };
  const excrcse1 = useContext(ExcerciseContext);
  const wrkout1 = useContext(WorkOutContext);

  return (
    <WorkOutContext.Provider value={{ workOut, addWorkout, userId, addUserId }}>
      <ExcerciseContext.Provider value={{ excercise, addExcercise }}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={GuestLogin} />
          <Route path="/register" component={GuestRegister} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <header>
            <p>Workout Notes: {wrkout1.notes}</p>
            <p>Workout Date: {wrkout1.date}</p>
            <p>Excercise Name: {excrcse1.name}</p>
            <p>Excercise Reps: {excrcse1.reps}</p>
            <p>Excercise Weight: {excrcse1.weight}</p>
          </header>
        </Switch>
      </ExcerciseContext.Provider>
    </WorkOutContext.Provider>
  );
}

export default App;
