import React from "react";
import styled from "styled-components";

interface PTInterface {
  boldText: string;
  otherText: string;
}

const PromotingTitle: React.FC<PTInterface> = ({ boldText, otherText }) => {
  return (
    <Title>
      <BolderSpan>{boldText}</BolderSpan>
      {otherText}
    </Title>
  );
};

export default PromotingTitle;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: gray;
  opacity: 0.65;
  max-width: 30vw;
  width: 70vw;
  padding-left: 17.5vw;
  padding-top: 5vw;

  @media screen and (orientation: portrait) {
    max-width: 85vw;
    width : 85vw;
    font-size : 2.35vh;
    padding-top : 5vh;
    padding-left : 10vw;
  }
`;


const BolderSpan = styled.span`
  font-weight: 800;
  color: black;
`;
