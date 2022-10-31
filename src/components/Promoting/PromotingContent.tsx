import React from "react";
import styled, { css } from "styled-components";

import PromotingContentData from "./PromotingContentData";

interface PCInterface {
  Home: boolean;
}

type PromotingContentProps = {
  Home: boolean
}

const PromotingContent: React.FC<PCInterface> = ({ Home }) => {
  return (
    <PromotingContentWrapper Home={Home}>
      {Home === false
        ? PromotingContentData.map((item) => {
            const SVG = item.svg;
            return (
              <PromotingContentElement Home={Home}>
                <SVG />
                <PromotingContentTitle Home={Home}>{item.title}</PromotingContentTitle>
                <PromotingContentText Home={Home}>{item.text}</PromotingContentText>
              </PromotingContentElement>
            );
          })
        : [
            PromotingContentData[0],
            PromotingContentData[1],
            PromotingContentData[2],
          ].map((item) => {
            const SVG = item.svg;
            return (
              <PromotingContentElement Home={Home}>
                <SVG />
                <PromotingContentTitle Home={Home}>{item.title}</PromotingContentTitle>
                <PromotingContentText Home={Home}>{item.text}</PromotingContentText>
              </PromotingContentElement>
            );
          })}
    </PromotingContentWrapper>
  );
};

export default PromotingContent;

const PromotingContentWrapper = styled.div<PromotingContentProps>`
  width: 68vw;

  margin-left: 16vw;

  display: grid;
  ${({ Home }) =>
    Home === true &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(1, 1fr);
      height: 40vh;

      @media screen and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
        height: 110vh;
      }
    `}
  ${({ Home }) =>
    Home === false &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      height: 80vh;

      @media screen and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(8, 1fr);
        height: 50vh;
      }
    `}
  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 100vw;
    margin-left: 0;
  }
`;

const PromotingContentElement = styled.div<PromotingContentProps>`
  margin-top: 10vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (orientation: portrait) {
    width: 36vh;
    height: 32vh;
  }

  ${({ Home }) =>
    Home === true &&
    css`
      width: 20vw;
      height: 34vh;
  `}
  ${({ Home }) => Home === false && css`
    width : 14vw;
    height : 34vh;
  `}
`;

const PromotingContentTitle = styled.h1<PromotingContentProps>`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: 0;
  font-size: 2vh;
  color: black;
  width: 100%;
  padding-left: 4.5vh;
  padding-top: 2vh;

  ${({ Home }) =>
    Home === false &&
    css`
      padding-right: 4.5vh;
      font-size: 1.4vh;

      @media screen and (width: 1600px) and (height: 1050px) {
        font-size: 1.2vh;
      }

      @media screen and (width: 1440px) and (height: 900px) {
        font-size: 1.3vh;
      }

      @media screen and (orientation: portrait) {
        font-size: 1.65vh;
      }
    `}

  @media screen and (orientation: portrait) {
    font-size: 2.15vh;
  }
`;

const PromotingContentText = styled.p<PromotingContentProps>`
  font-weight: 300;
  color: gray;
  opacity: 0.85;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin: 0;
  font-size: 1.55vh;
  padding-left: 4.5vh;
  padding-right: 4.5vh;
  padding-top: 2vh;
  max-width: 80%;

  ${({ Home }) => Home === false && css`
    max-width : 72%;
  `}

  @media screen and (orientation: portrait) {
    font-size: 1.75vh;
  }
`;
