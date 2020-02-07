import React, { useState, useContext, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
// Components
import Welcome from "./components/User/WelcomePage";
import EditWorkout from "./components/EditWorkout";
import GuestLogin from "./components/User/GuestLogin";
import GuestRegister from "./components/User/GuestRegister";
import Dashboard from "./components/Dashboard";
import ExercisePage from "./components/ExercisePage";
// Utils
import ProtectedRoute from "./Auth/ProtectedRoute";
import axiosWithAuth from "./Auth/axiosWithAuth";
// Contexts
import { WorkOutContext } from "./contexts/WorkOutContext";
import { ExerciseContext } from "./contexts/ExerciseContext";

function App(props) {
  const [workOut, setWorkOut] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [workOutId, setWorkOutId] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/api/workouts")
      .then(res => {
        setWorkOut(res.data);
      });
  }, [setWorkOut]);

  const addWorkout = item => {
    axiosWithAuth()
      .post("api/workouts", item)
      .then(response => {
        setWorkOut(...workOut, response.data);
      })
      .catch(err => console.log(err));
  };

  const addExercise = item => {
    axiosWithAuth()
      .post("api/workouts/exercises", item)
      .then(response => {
        setExercise(...exercise, response.data);
      })
      .catch(err => console.log(err));
  };

  const deleteItem = id => {
    console.log("delete id", id);
    axiosWithAuth()
      .delete(`/api/workouts/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const updateWorkout = (id, item) => {
    axiosWithAuth()
      .put(`/api/workouts/${id}`, item)
      .then(response => {
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <WorkOutContext.Provider
      value={{ workOut, addWorkout, setWorkOut, deleteItem, updateWorkout }}
    >
      <ExerciseContext.Provider
        value={{ exercise, addExercise, workOutId, setWorkOutId, setExercise }}
      >
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={GuestLogin} />
          <Route path="/register" component={GuestRegister} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route
            path="/exercises/:id"
            things={props}
            component={ExercisePage}
          />
          <Route path="/edit/:id" workOut={workOut} component={EditWorkout} />
        </Switch>
      </ExerciseContext.Provider>
    </WorkOutContext.Provider>
  );
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
