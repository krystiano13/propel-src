import React from "react";
import styled from "styled-components";
import PromotingTitle from "../Promoting/PromotingTitle";
import QuestionsArray from "./QuestionsArray";

const Questions = () => {
  return (
    <Wrapper>
      <PromotingTitle
        boldText="Got a question about our pricing model? "
        otherText="Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an."
      />
      <QuestionsContainer>
        {QuestionsArray.map((item) => (
          <TextWrapper>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </TextWrapper>
        ))}
      </QuestionsContainer>
      <BorderElement />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 110vh;

  @media screen and (orientation: portrait) {
    height: 290vh;
  }
`;

const QuestionsContainer = styled.div`
  width: 70vw;
  height: 90vh;
  margin-left: 17.5vw;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 90vw;
    height: 280vh;
    margin-left: 5vw;

    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
    justify-items: center;
  }
`;

const BorderElement = styled.div`
  width: 50vw;
  height: 0.15vh;
  background-color: grey;
  opacity: 0.2;
  display: block;
  margin-top: 8vh;
  z-index: 1999;
  margin-left: 25vw;

  @media screen and (orientation: portrait) {
    width: 70vw;
    margin-left: 15vw;
  }
`;

const TextWrapper = styled.article`
  width: 30vw;
  height: auto;
  @media screen and (orientation: portrait) {
    width: 90vw;
  }
`;

const Title = styled.h1`
  font-size: 1.9vh;
  font-weight: 600;
  color: black;
  margin: 0;
  max-width: 30vw;
  @media screen and (orientation: portrait) {
    max-width: 90vw;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.8vh;
  font-weight: 400;
  color: grey;
  max-width: 30vw;
  margin-top: 1vh;

  @media screen and (orientation: portrait) {
    max-width: 90vw;
  }
`;

export default Questions;
