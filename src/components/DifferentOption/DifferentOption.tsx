import React from "react";
import styled from "styled-components";

import PromotingTitle from "../Promoting/PromotingTitle";
import Image from "./Image";

const DifferentOption = () => {
  return (
    <Wrapper>
      <PromotingTitle
        boldText="Here's a different option for you. "
        otherText="Eos in maluisset mediocritatem. Cu qui admodum inimicus, te mei debet qualisque."
      />
      <Image isAboutOpen={false} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
`;

export default DifferentOption;
