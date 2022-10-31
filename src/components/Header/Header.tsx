import React from "react";
import styled, { css } from "styled-components";

import StartTitle from "./StartTitle";
import StartButton from "./StartButton";
import Navbar from "../Navbar/Navbar";

import HeaderImage from "../../images/Header.jpg";

type HeaderProps = {
  colorBackground: boolean;
};

interface HeaderInterface {
  colorBackground: boolean;
  subpageTitle: string;
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderInterface> = ({ colorBackground, subpageTitle, title, subtitle }) => {
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => {
      if (window.innerWidth >= window.innerHeight) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    }, 250);
  }, []);
  return (
    <HeaderWrapper colorBackground={colorBackground}>
      <Navbar mobile={mobile} />
      <HeaderContainer colorBackground={colorBackground}>
        {
          colorBackground === true &&
          <SubpageTitle>{ subpageTitle }</SubpageTitle>
        }
        <StartTitle
          color="white"
          subtitle={false}
          text={title}
          colorBackground={colorBackground}
        />
        <StartTitle
          color="white"
          subtitle={true}
          text={ subtitle }
          colorBackground={colorBackground}
        />
        {colorBackground === false && <StartButton label="Get Started" />}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const SubpageTitle = styled.p`
  color : white;
  font-size : 2vh;
  font-weight: 600;
  transform: translateY(2vh);
  display: flex;
  align-items: center;

  ::after {
    content : '';
    display : block;
    width : 3.5vh;
    height : 0.35vh;
    background-color: white;
    margin-left: 1.6vh;
  }

  @media screen and (orientation : portrait) {
    
  }
`

const HeaderWrapper = styled.div<HeaderProps>`
  width: 100vw;
  height: 60vh;

  ${({ colorBackground }) =>
    colorBackground === false &&
    css`
      background-image: url(${HeaderImage});
      background-size: 120%;
      background-position: 0vh -45vh;
      align-items: center;

      @media screen and (orientation: portrait) {
        height: 100vh;
        background-position: -150vw;
        background-size: 400%;
      }
    `}

  ${({ colorBackground }) =>
    colorBackground === true &&
    css`
      background-image: none;
      background-color: #5ab963;

      @media screen and (orientation: portrait) {
        height: 60vh;
        background-position: -150vw;
        background-size: 400%;
      }
    `}

  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const HeaderContainer = styled.div<HeaderProps>`
  width: 100vw;
  height: 52vh;

  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;

  :last-child {
    animation: appear 0.6s;
  }

  ${({ colorBackground }) =>
    colorBackground === true &&
    css`
      align-items: flex-start;
      :first-child,
      :last-child {
        margin-left: 15vw;

        @media screen and (orientation: portrait) {
          margin-left: 5vw;
        }
      }
    `}

  ${({ colorBackground }) =>
    colorBackground === false &&
    css`
      align-items: center;
    `}
  @media screen and (orientation: portrait) {
    height: 92vh;
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(5vh);
    }

    to {
      opacity: 1;
      transform: translateY(0vh);
    }
  }
`;

export default Header;
