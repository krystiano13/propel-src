import React from "react";
import styled , { css } from "styled-components";

interface Nav {
    children: string,
  category: string,
}

type NavProps = {
    category: string
}

const NavButton: React.FC<Nav> = ({ children, category }) => {
    return <NavBtn category={category}>{ children }</NavBtn>;
};

const NavBtn = styled.button<NavProps>`
  width: 12vh;
  height: 5vh;
  margin : 0;
  padding : 0;
  color: white;
  background-color: transparent;
  font-size: 1.5vh;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5%;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800;600&display=swap");
  font-family: "Montserrat", sans-serif;

  @media screen and (orientation : portrait) {
    font-size : 1.75vh;
    width : 32vh;
    height : 6vh;
  }

  ${({ category }) =>
    category === "dot" &&
    css`
      width: 1.2vh;
      height: 1.2vh;
      background-color: white;
      border: none;
      border-radius: 100%;
      cursor: default;
    `};

  ${({ category }) =>
    category === "noborder" &&
    css`
      border: none;
    `}

    ${({ category }) => category === 'border' && css`
        border : solid white 0.3vh;
        transition: 250ms;
        :hover {
          background-color: white;
          color : black;
        }
    `};
`;

export default NavButton;
