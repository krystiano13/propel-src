import React from "react";
import styled from "styled-components";

import Image from "../DifferentOption/Image";

const Combine = () => {
  return (
    <Wrapper>
      <Image isAboutOpen={true} />
      <Title>
        <BolderSpan>
          We combine the benefits of the best local farms with advances made
          possible by technology to deliver you the best catering experience
          possible.
        </BolderSpan>
        {
          " Food surrounds us, but we don’t always think about where it comes from or how it got to us. The way we eat and our experiences with food have huge impact on everything from the environment to our health."
        }
      </Title>
      <BorderElement />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 142vh;

  @media screen and (orientation : portrait) {
    height : 85vh;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: gray;
  opacity: 0.65;
  max-width: 40vw;
  width: 40vw;
  padding-left: 30vw;
  text-align: center;

  @media screen and (orientation: portrait) {
    max-width: 90vw;
    width: 90vw;
    font-size: 2.35vh;
    padding-top: 1vh;
    padding-left: 5vw;
  }
`;

const BolderSpan = styled.span`
  font-weight: 800;
  color: black;
`;

const BorderElement = styled.div`
  width: 50vw;
  height: 0.15vh;
  background-color: grey;
  opacity: 0.2;
  display: block;
  margin-top: 12vh;
  z-index: 1999;
  margin-left: 25vw;

  @media screen and (orientation: portrait) {
    width: 70vw;
    margin-left: 15vw;
  }
`;

export default Combine;
