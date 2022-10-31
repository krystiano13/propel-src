import React from "react";
import styled from "styled-components";

interface PersonInterface {
  ImageSrc: string;
  name: string;
  description: string;
}

const Person: React.FC<PersonInterface> = ({ ImageSrc, name, description }) => {
  return (
    <Wrapper>
      <Image src={ImageSrc} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  width: 25vh;
  height: 42vh;
  background-color: #fcfcfc;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top : 4vh;
`;

const Image = styled.img`
  width: 25vh;
  height: 28vh;
  background-color: whitesmoke;
`;

const Name = styled.h1`
  color: black;
  font-size: 1.9vh;
  padding-left: 2vh;
  padding-top: 2vh;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.h2`
  margin: 0;
  color: gray;
  font-weight: 300;
  opacity: 0.85;
  padding-left: 2vh;
  padding-top: 1vh;
  font-size: 1.8vh;
`;

export default Person;
