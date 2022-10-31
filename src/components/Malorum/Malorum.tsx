import React from "react";
import styled from "styled-components";

import PromotingTitle from "../Promoting/PromotingTitle";

const RulesArray = [
  {
    id: "01",
    title: "Stay curious",
  },
  {
    id: "02",
    title: "Be respectful",
  },
  {
    id: "03",
    title: "Do good work",
  },
];

const Malorum = () => {
  return (
    <Wrapper>
      <PromotingTitle
        boldText="Ad malorum nominati vituperata vix. "
        otherText="Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an."
      />
      <Rules>
        {RulesArray.map((item) => (
          <Rule>
            <RuleId>{item.id}</RuleId>
            <RuleTitle>{item.title}</RuleTitle>
            <RuleText>
              Esse audiam assentior pri in, ius probatus singulis ne. Exerci
              fastidii duo ex, ex quo unum senserit.
            </RuleText>
          </Rule>
        ))}
      </Rules>
      <BorderElement />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 60vh;

  @media screen and (orientation: portrait) {
    height : 160vh;
  }
`;

const Rules = styled.div`
  width: 70vw;
  height: 25vh;
  margin-left: 17.5vw;
  margin-top: 12vh;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  align-items: center;

  @media screen and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items : center;
    height : 90vh;
    width : 100vw;
    margin-left: 0;
  }
`;

const Rule = styled.div`
  width: 22vw;
  height: 28vh;

  @media screen and (orientation: portrait) {
    width : 90vw;
    margin-left : 5vw;
  }
`;

const RuleId = styled.h1`
  color: black;
  font-weight: 600;
  margin: 0;
  max-width: 22vw;
  width: 22vw;
  font-size: 2vh;

  @media screen and (orientation: portrait) {
    width: 90vw;
    max-width: 90vw;
  }
`;

const RuleTitle = styled.h2`
  color: black;
  font-weight: 600;
  margin: 0;
  max-width: 22vw;
  width: 22vw;
  font-size: 2.6vh;
  margin-top: 1vh;

  @media screen and (orientation: portrait) {
    width: 90vw;
    max-width: 90vw;
  }
`;

const RuleText = styled.p`
  color: grey;
  opacity: 0.85;
  font-weight: 400;
  margin: 0;
  max-width: 20vw;
  width: 22vw;
  font-size: 1.9vh;
  @media screen and (orientation: portrait) {
    width: 70vw;
    max-width: 70vw;
  }
`;

const BorderElement = styled.div`
  width: 50vw;
  height: 0.15vh;
  background-color: grey;
  opacity: 0.2;
  display: block;
  margin-top: 6vh;
  z-index: 1999;
  margin-left: 25vw;

  @media screen and (orientation: portrait) {
    width: 70vw;
    margin-left: 15vw;
  }
`;

export default Malorum;
