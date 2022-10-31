import React from "react";
import styled from "styled-components";

const KnowPremiums = () => {
  return (
    <Wrapper>
      <Title>Wanna know more about the Premium deal?</Title>
      <Link href="https://google.com">SEE THE FULL RANGE OF PREMIUM</Link>
      <BorderElement />
    </Wrapper>
  );
};

export default KnowPremiums;

const Wrapper = styled.div`
  width: 100vw;
  height: 25vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2vh;
  font-weight: 400;

  @media screen and (orientation : portrait) {
    font-size : 2vh;
  }
`;

const BorderElement = styled.div`
  width: 50vw;
  height: 0.075vh;
  background-color: grey;
  opacity: 0.2;
  display: block;
  margin-top: 5vh;

  @media screen and (orientation: portrait) {
    width: 70vw;
    margin-left: 15vw;
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  font-size: 1.5vh;
  cursor: pointer;
  text-decoration: none;
  color: #5ab963;
  width: 15vw;

  @media screen and (orientation: portrait) {
    width: 90vw;
    margin-left: 5vw;
    font-size: 1.5vh;
  }
`;
