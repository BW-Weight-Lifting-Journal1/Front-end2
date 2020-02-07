import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  height: 100px;
  margin-bottom: 40px;
  width: 50%;
  border: 1px solid black;
  box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.5);
  background-color: #02848e;
  border-radius: 40px;
  font-family: "Slabo 27px", cursive;
  h1 {
    font-size: 45px;
    color: #eca400;
  }
`;

const Title = () => {
  return (
    <StyledTitle>
      <h1>Weight Lifting Journal</h1>
    </StyledTitle>
  );
};

export default Title;
