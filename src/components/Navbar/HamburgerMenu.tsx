import React from "react";
import styled, { css } from "styled-components";
import NavButton from "./NavButton";
import NavButtonsData from "./NavButtonsData";

import headerContentArray from "../../views/headerContentArray";
import { NavLink } from "react-router-dom";


interface HMInterface {
  open: boolean;
}

type MenuProps = {
  open : boolean
}

const HamburgerMenu: React.FC<HMInterface> = ({ open }) => {
  return (
    <HamburgerWrapper open={open}>
      {NavButtonsData.filter((item) => item.category !== "dot").map((item) => (
        <NavLink to={item.to}>
          <NavButton
            category={item.category}
          >
            {item.content}
          </NavButton>
        </NavLink>
      ))}
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div<MenuProps>`
  width: 100vw;
  height: 65vh;
  background-color: #5ab963;
  z-index: 1000;
  
  position : absolute;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  justify-items: center;
  align-items: center;

  transition : transform 250ms;
  will-change : transform;

  ${({ open }) => open === false && css`
      transform: translateY(-65vh);
  `};

  ${({ open }) => open === true && css`
    transform: translateY(6vh);
  `}
`;

export default HamburgerMenu;
