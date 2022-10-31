import React from "react";
import styled from "styled-components";

interface IlludTitleInterface {
  text: string;
  bolderText: string;
}

const IlludTitle: React.FC<IlludTitleInterface> = ({ text, bolderText }) => (
  <Title>
    <BolderText>{bolderText}</BolderText>
    {text}
  </Title>
);

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  margin-top: 10vh;
  text-align: center;
  font-size: 2.6vh;
  color: grey;
  opacity: 0.85;
  font-weight: 400;
  width: 40vw;
  max-width: 40vw;
  margin-left: 30vw;

  @media screen and (orientation: portrait) {
    width : 80vw;
    max-width : 80vw;
    margin-left : 10vw;
    font-size : 2.4vh;
  }
`;

const BolderText = styled.span`
  color: black;
  font-weight: 800;
`;

export default IlludTitle;
