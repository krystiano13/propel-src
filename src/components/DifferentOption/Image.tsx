import React from "react";
import styled, { css } from "styled-components";

import doImage from "../../images/doImage.jpg";
import S2 from "../Promoting/SVG/S2";

interface ImageInteface {
  isAboutOpen : boolean
}

type Props = {
  isAboutOpen : boolean
}

const Image: React.FC<ImageInteface> = ({ isAboutOpen }) => {
  return (
    <Wrapper isAboutOpen={isAboutOpen}>
      {!isAboutOpen && (
        <Element>
          <SVGWrap>
            <S2></S2>
          </SVGWrap>
          <Main>
            <Title>Pro ad constituto el</Title>
            <Text>
              Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos
              ocurreret splendide hendrerit. Dicant placerat democritum eos id,
              sit mollis invidunt mediocritatem ei.
            </Text>
          </Main>
        </Element>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  width: 80vw;
  height: 80vh;
  margin-left: 10vw;
  background-image: url(${doImage});
  background-size: 100%;
  margin-top: 10vh;
  position: relative;
  z-index: -1;
  margin-bottom: 15vh;

  @media screen and (orientation: portrait) {
    width: 90vw;
    margin-left: 5vw;
    height: 20vh;
    margin-bottom: ${({ isAboutOpen }) =>
      isAboutOpen === true ? "6vh" : "20vh"};
  }
`;

const Main = styled.article``;
const SVGWrap = styled.div`
  width: 12vw;
  height: 20vh;
  display: flex;
  justify-content: center;

  :first-child {
    margin-top: 0;
  }

  @media screen and (orientation: portrait) {
    width: 20vw;
  }
`;

const Element = styled.div`
  margin-top: 72vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  position: absolute;
  width: 50vw;
  margin-left: 15vw;
  height: 20vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (orientation : portrait) {
    margin : 0;
    width : 90vw;
    height : 20vh;
    margin-top: 20vh;
  }
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin: 0;
  font-size: 2vh;
  color: black;
  width: 100%;
  padding-left: 4.5vh;
  padding-top: 2vh;

  @media screen and (orientation: portrait) {
    font-size: 1.8vh;
  }
`;

const Text = styled.p`
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

  @media screen and (orientation: portrait) {
    font-size: 1.4vh;
  }
`;

export default Image;
