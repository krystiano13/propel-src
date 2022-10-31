import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router";

interface StartButtonProps {
  label: string;
}

const StartButton: React.FC<StartButtonProps> = ({ label }) => {
  const navigate = useNavigate();
  return (
    <StartBtn
      onClick={() => {
        navigate("/propel/features");
      }}
    >
      {label}
    </StartBtn>
  );
};

const StartBtn = styled.button`
  display: block;

  width: 18vh;
  height: 6vh;
  font-size: 1.85vh;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 1vh;
  background-color: #5ab963;
  cursor: pointer;
  will-change: background-color;
  transition: background-color 250ms;
  margin-top: 8vh;

  :hover {
    background-color: #4ca054;
  }
`;

export default StartButton;
