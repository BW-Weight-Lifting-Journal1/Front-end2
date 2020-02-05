import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
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
import { ExcerciseContext } from "./contexts/ExcerciseContext";

function App(props) {
  const [workOut, setWorkOut] = useState([]);
  const [excercise, setExcercise] = useState({});

  const addWorkout = item => {
    console.log("item passed to addWorkout in App.js", item);
    console.log("workOut in App.js", workOut);
    axiosWithAuth()
      .post("api/workouts", item)
      .then(response => {
        setWorkOut(...workOut, response.data);
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  const addExcercise = item => {
    axiosWithAuth()
      .post("api/workout/excercise", item)
      .then(response => {
        console.log(response)
        setExcercise(response.data);
      })
      .catch(err => console.log(err));
  };

  const deleteItem = id => {
    console.log("delete id", id)
    axiosWithAuth()
      .delete(`/api/workouts/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const excrcse1 = useContext(ExcerciseContext);
  const wrkout1 = useContext(WorkOutContext);

  return (
    <WorkOutContext.Provider value={{ workOut, addWorkout, setWorkOut, deleteItem }}>
      <ExcerciseContext.Provider value={{ excercise, addExcercise }}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={GuestLogin} />
          <Route path="/register" component={GuestRegister} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/edit/:id" component={EditWorkout} />
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