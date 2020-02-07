import React from "react";
// import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import Title from "./WelcomeTitle";
import { Link } from "react-router-dom";
import { Div, Main } from "./theme";

const Choices = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Choice1 = styled.div`
  background-image: url(https://img.icons8.com/cotton/2x/dumbbell--v1.png);
`;

const Choice2 = styled.div`
  background-image: url(https://webstockreview.net/images/pencil-icon-png-13.png);
`;

export default function Welcome() {
  return (
    <Div>
      <Main>
        <Title />
        <Choices>
          <Link to="/login">
            <Choice1 className="choices">
              <p>Continue where you left off.</p>
            </Choice1>
          </Link>
          <Link to="/register">
            <Choice2 className="choices">
              <p>Let's get you signed up!</p>
            </Choice2>
          </Link>
        </Choices>
      </Main>
    </Div>
  );
}
