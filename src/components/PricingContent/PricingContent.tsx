import React from "react";
import styled from "styled-components";
import P1 from "./P1";

import PricingArray from "./PricingArray";

const PricingContent = () => {
  return (
    <Wrapper>
      {PricingArray.map((item) => (
        <Element>
          <P1 />
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </Element>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  height: 40vh;
  padding-right: 10vw;
  padding-left: 10vw;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-self: center;

  @media screen and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4,1fr);

    height : 180vh;
  }
`;

export default PricingContent;

const Element = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 32vh;
  height: 40vh;
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: 0;
  font-size: 2vh;
  color: black;
  width: 100%;
  padding-left: 4.5vh;
  padding-top: 2vh;
`;

const Text = styled.p`
  font-weight: 300;
  color: gray;
  opacity: 0.85;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin: 0;
  font-size: 1.55vh;
  padding-left: 4.5vh;
  padding-right: 8vh;
  padding-top: 2vh;
  max-width: 70%;
`;
