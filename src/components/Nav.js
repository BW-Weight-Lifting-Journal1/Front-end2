  
import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Navigation = () => {

    const NavContainer = styled.div`
    background: #006494;
    margin-top 0px;
    width: 100%;
    height: 100px;
    padding-top: 0px;
    border-bottom: 1px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;


  return (
    <NavContainer>
        <h1 className="nav-header">Workout Tracker</h1>
        <div className="button-container">
            <div>
            <Link className="dash-button" exact to="/dashboard">My Board</Link>
            </div>
            <div>
            <Link className="log-button" exact to="/logout/">Log Out</Link>
            </div>
        </div>
    </NavContainer>
  );
};

export default Navigation;