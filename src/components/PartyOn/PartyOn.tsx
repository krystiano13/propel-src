import React from "react";
import styled from "styled-components";
import StartButton from "../Header/StartButton";

interface party {
  bolderText: string;
  text: string;
}

const PartyOn: React.FC<party> = ({ bolderText, text }) => {
  return (
    <Wrapper>
      <PartyOnContent>
        <PartyOnParagraf>Party On</PartyOnParagraf>
        <Title>
          <BolderText>{bolderText}</BolderText>
          {text}
        </Title>
      </PartyOnContent>
      <ButtonWrapper>
        <StartButton label="Get Started" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PartyOn;

const Wrapper = styled.div`
  width: 100vw;
  height: 42vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;

  @media screen and (orientation : portrait) {
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(2,1fr);
    justify-items: left;
  }
`;

const ButtonWrapper = styled.div`
  @media screen and (orientation: portrait) {
    display: block;
    transform: translateY(-10vh);
    margin-left: 8vw;
  }
`;

const PartyOnContent = styled.div`
  width: 28vw;
  height: 35vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width : 100vw;
    height : 30vh;
  }
`;

const PartyOnParagraf = styled.p`
  color: #5ab963;
  font-weight: 600;
  font-size: 1.8vh;
  margin: 0;
  display: flex;
  align-items: center;
  margin-top: 6vh;

  ::after {
    content: "";
    width: 1.6vw;
    height: 0.35vh;
    background-color: #5ab963;
    display: block;
    margin-left: 1vw;
  }

  @media screen and (orientation: portrait) {
    width: 100vw;
    margin-left: 15vw;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2.68vh;
  color: grey;
  opacity: 0.85;
  font-weight: 400;
  width: 28vw;
  max-width: 28vw;
  margin-left: 21vw;

  @media screen and (orientation: portrait) {
    width : 90vw;
    max-width : 90vw;
    margin-left : 5vw;
  }

  @media screen and (orientation: portrait) {
    font-size: 2.3vh;
  }
`;

const BolderText = styled.span`
  color: black;
  font-weight: 800;
`;
