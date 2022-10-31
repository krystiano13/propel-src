import React from "react";
import styled from "styled-components";
import Baner from "../../images/GoPremiumBaner.jpg";

const GoPremium = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Go Premium</Title>
        <Text>
          <BiggerText>
            Tation temporibus ei usu, vim an eirmod accus cu.{" "}
          </BiggerText>
          Tibique suscipiantur, per ex scripta fabellas petentium. Go Premium
        </Text>
        <PremiumButton>Go Premium</PremiumButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  background-size: 100%;
  background-image: url(${Baner});
  display: flex;
  justify-content: flex-end;

  @media screen and (orientation : portrait) {
    background-size: 250%;
  }
`;

const Content = styled.div`
  width: 20vw;
  height: 55vh;
  background-color: #5ab963;
  margin-top: 7.5vh;
  margin-right: 15vw;

  @media screen and (orientation: portrait) {
    width : 80vw;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2vh;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 600;
  padding-left: 4vh;
  padding-top: 5vh;

  ::after {
    content: "";
    width: 8%;
    height: 0.25vh;
    background-color: white;
    display: block;
    margin-left: 2%;
  }
`;

const Text = styled.p`
  font-size: 2.8vh;
  font-weight: 400;
  padding-left: 4vh;
  max-width: 78%;
  color: white;
`;

const BiggerText = styled.span`
  font-weight: 600;
`;

const PremiumButton = styled.button`
  display: block;
  width: 18vh;
  height: 6vh;
  font-size: 1.85vh;
  font-weight: 700;
  color: black;
  border: none;
  border-radius: 1vh;
  background-color: white;
  cursor: pointer;
  will-change: background-color;
  transition: background-color 250ms;
  margin-top: 5vh;
  transform: translateX(4vh);

  :hover {
    background-color: #c0c0c0;
  }
`;

export default GoPremium;
