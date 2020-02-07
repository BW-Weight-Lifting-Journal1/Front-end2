import React, { useState } from "react";
import Title from "./WelcomeTitle";
import axiosWithAuth from "../../Auth/axiosWithAuth";
import { FormDiv, Div, Main } from "./theme";

export default function GuestRegister(props) {
  const [err, setErr] = useState();
  const [register, setRegister] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", register)
      .then(result => {
        props.history.push("/login");
      })
      .catch(e => {
        setErr(e.response.data);
        console.log("Error", err);
      });
  };
  return (
    <Div>
      <Main>
        <Title />
        <FormDiv>
          <form onSubmit={handleSubmit}>
            {err && <div className="errors"> {err}</div>}
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
              value={register.username}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={register.password}
            />
            <button type="submit">Let's Get Started!</button>
          </form>
        </FormDiv>
      </Main>
    </Div>
  );
}
