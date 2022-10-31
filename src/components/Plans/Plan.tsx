import React from "react";
import styled from "styled-components";

interface PlanInterface {
  title: string;
  price: string;
  subtitle: string;
  text: string[];
}

const Plan: React.FC<PlanInterface> = ({ title, price, subtitle, text }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Price>
        <BiggerFont>{price}</BiggerFont>USD
      </Price>
      <OtherText>{subtitle}</OtherText>
      <GreenLine />
      <TextWrapper>
        {text.map((item) => (
          <Text>{item}</Text>
        ))}
      </TextWrapper>
      <Button>Get Started</Button>
    </Wrapper>
  );
};

export default Plan;

const Wrapper = styled.div`
  width: 45vh;
  height: 72vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: box-shadow 250ms;
  will-change: box-shadow;

  :hover {
    box-shadow: rgba(149, 157, 165, 0.4) 0px 32px 64px;
  }

  @media screen and (orientation : portrait) {
    width : 90vw;
  }
`;

const TextWrapper = styled.div`
  height: 36vh;
`;

const Title = styled.h1`
  font-size: 2vh;
  margin: 0;
  font-weight: 500;
  padding-left: 5vh;
  padding-top: 5vh;
`;

const Button = styled.button`
  width: 45vh;
  height: 7vh;
  background-color: #5ab963;
  color: white;
  position: absolute;
  z-index: 1299;
  border: none;
  cursor: pointer;
  font-size: 2.1vh;
  font-weight: 600;
  transition: background-color 250ms;
  will-change: background-color;

  @media screen and (orientation: portrait) {
    width: 90vw;
  }

  :hover {
    background-color: #4ca054;
  }
`;

const Price = styled.h2`
  font-size: 1.8vh;
  font-weight: 400;
  color: gray;
  opacity: 0.85;
  margin: 0;
  padding-left: 5vh;
  display: flex;
  align-items: flex-end;
`;

const BiggerFont = styled.div`
  margin: 0;
  padding: 0;
  color: black;
  font-weight: 600;
  opacity: 1;
  font-size: 8vh;
  height: 8vh;

  :first-child {
    padding-right: 1vh;
  }
`;

const OtherText = styled.h3`
  font-size: 1.9vh;
  font-weight: 400;
  color: gray;
  opacity: 0.85;
  margin: 0;
  padding-left: 5vh;
  padding-right: 5vh;
  padding-top: 2vh;
`;

const GreenLine = styled.hr`
  border-color: #5ab963;
  width: 35vh;
  margin-top: 4vh;
  transform: scaleY(0.5);
`;

const Text = styled.p`
  margin: 0;
  color: black;
  font-weight: 400;
  font-size: 1.7vh;
  padding-left: 5vh;
  padding-top: 1vh;
  transform: translateY(2vh);
`;
