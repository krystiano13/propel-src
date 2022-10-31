import React from "react";
import styled, { css } from "styled-components";

interface StartTitleInterface {
  text: string;
  color: string;
  subtitle: boolean;
  colorBackground: boolean;
}

type Props = {
  color: string;
  subtitle: boolean;
  colorBackground: boolean;
};

const StartTitle: React.FC<StartTitleInterface> = ({
  text,
  color,
  subtitle,
  colorBackground,
}) => {
  return (
    <StartH1
      colorBackground={colorBackground}
      color={color}
      subtitle={subtitle}
    >
      {text}
    </StartH1>
  );
};

const StartH1 = styled.h1<Props>`
  margin: 0;
  margin-top : 2vh;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap");
  font-family: "Montserrat", sans-serif;

  color: ${({ color }) => color};

  ${({ colorBackground }) =>
    colorBackground === true &&
    css`
      text-align: left;
      padding: 0;
      max-width : 40vw;

      @media screen and (orientation : portrait) {
        max-width : 90vw;
      }
    `}

  ${({ colorBackground }) =>
    colorBackground === false &&
    css`
      text-align: center;
    `}

  ${({ subtitle, colorBackground }) =>
    subtitle === true &&
    css`
      font-size: 2vh;
      font-weight: 300;

      @media screen and (orientation: portrait) {
        font-size: 1.8vh;
        ${() =>
          colorBackground === true &&
          css`
            padding-left: 0vw;
            padding-right: 10vw;
          `}
      }

      ${() =>
        colorBackground === false &&
        css`
          padding-left: 5vw;
          padding-right: 5vw;
        `}
      }
    `};

  ${({ subtitle }) =>
    subtitle === false &&
    css`
      font-size: 6.5vh;
      font-weight: 800;

      @media screen and (orientation: portrait) {
        font-size: 3.5vh;
      }
    `};
`;

export default StartTitle;
