import React from "react";
import styled from "styled-components";
import Plan from "./Plan";

import PromotingTitle from "../Promoting/PromotingTitle";
import AllPlans from "./AllPlans";

const Plans = () => {
  return (
    <Wrapper>
      <PromotingTitle
        boldText="We offer multiple options. "
        otherText="Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea."
      />
      <CardsWrapper>
        {AllPlans.map((item) => (
          <Plan
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            text={item.text}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Plans;

const Wrapper = styled.div`
  width: 100vw;
  height: 110vh;

  @media screen and (orientation : portrait) {
    height : 300vh;
  }
`;

const CardsWrapper = styled.div`
  width: 80vw;
  height: 90vh;
  margin-left: 10vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 90vw;
    margin-left: 5vw;
    height: 280vh;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3,1fr);
  }
`;
