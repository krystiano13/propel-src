import React from "react";
import styled from "styled-components";
import PromotingTitle from "../Promoting/PromotingTitle";
import Person from "./Person";
import PersonsArray from "./Persons";

const Meet = () => {
  return (
    <Wrapper>
      <PromotingTitle
        boldText="Meet the awesome team behind Spoon. "
        otherText="We’re bridging the gap between the world’s oldest and largest industry and a future where technology can be used to solve our hardest problems."
      />
      <Persons>
        {PersonsArray.map((item) => (
          <Person
            ImageSrc={item.ImageSrc}
            name={item.name}
            description={item.description}
          />
        ))}
      </Persons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 170vh;

  @media screen and (orientation: portrait) {
    height: 545vh;
    transform: translateY(-18vh);
  }
`;

const Persons = styled.div`
  width: 70vw;
  height: 150vh;
  margin-left: 17.5vw;
  margin-top: 5vh;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;

  @media screen and (orientation: portrait) {
    margin-left: 0;
    width : 100vw;
    height : 530vh;
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(11, 1fr);
  }
`;

export default Meet;
