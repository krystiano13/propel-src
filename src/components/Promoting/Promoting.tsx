import React from "react";
import styled, { css } from "styled-components";
import PromotingTitle from "./PromotingTitle";
import PromotingContent from "./PromotingContent";

interface PromotingInterface {
  Home: boolean;
}

type Props = {
  Home: boolean;
};

const Promoting: React.FC<PromotingInterface> = ({ Home }) => {
  return (
    <PromotingWrapper Home={Home}>
      <PromotingTitle
        boldText={
          Home === true
            ? "Promoting your business and services with Propel: "
            : "Electram constituto eam id. Eum illud option te, ea vim tractatos. "
        }
        otherText={
          Home === true
            ? "A responsive, multi-page business template with everything you need propel your business."
            : "Mazim putant ex mea, et nullam suscipit eam, qui accommodare vituperatoribus at."
        }
      />
      <PromotingContent Home={Home} />
    </PromotingWrapper>
  );
};

export default Promoting;

const PromotingWrapper = styled.div<Props>`
  width: 100vw;
  overflow-x: hidden;

  ${({ Home }) =>
    Home === true &&
    css`
      height: 75vh;
      @media screen and (orientation: portrait) {
        height: 160vh;
      }
    `}

  ${({ Home }) =>
    Home === false &&
    css`
      height: 115vh;
      @media screen and (orientation: portrait) {
        height: 360vh;
      }
    `}
`;
