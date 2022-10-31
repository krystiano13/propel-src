import React from "react";
import styled from "styled-components";

import personImg from "../../images/Person.jpg";

type Props = {
  src: string;
};

const People = () => {
  return (
    <Wrapper>
      <Title>WHAT THE PEOPLE SAY</Title>
      <Other>
        “Great customer service, kuddos for doing things the right way rather
        than the easy way. I am still getting compliments about the food served
        at my wedding.”
      </Other>
      <Person>
        <Image src={personImg} />
        <PersonName>Paul Morgan</PersonName>
      </Person>
      <BorderElement />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 40vh;
  padding-top : 10vh;
`;

const Person = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (orientation : portrait){
    transform: translateY(3vh);
  }
`;

const PersonName = styled.p`
  color: black;
  font-weight: 300;
  font-size: 2vh;
  margin: 0;
  margin-right: 0.6vw;
  margin-left: 0.6vw;
`;

const Image = styled.img<Props>`
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  margin-right: 0.6vw;
  margin-left: 0.6vw;
`;

const Title = styled.h1`
  text-align: center;
  color: gray;
  opacity: 0.8;
  font-size: 1.8vh;
  font-weight: 400;
`;

const Other = styled.h2`
  text-align: center;
  color: #4ca054;
  font-size: 2.6vh;
  font-weight: 400;
  max-width: 45vw;
  width: 45vw;
  margin-left: 27.5vw;

  @media screen and (orientation: portrait) {
    max-width: 90vw;
    width: 90vw;
    margin-left: 5vw;
    font-size: 2.25vh;
    padding-top : 2vh;
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

export default People;
