import React from "react";
import styled, { css } from "styled-components";

interface HBInterface {
  openMenu: () => Promise<void>,
  open : boolean
}

const HamburgerButton:React.FC<HBInterface> = ({ openMenu, open }) => {
  return (
    <HamburgerWrapper
      onClick={openMenu}
      open={open}
    >
      <HamburgerStripe id="hs1"></HamburgerStripe>
      <HamburgerStripe id="hs2"></HamburgerStripe>
      <HamburgerStripe id="hs3"></HamburgerStripe>
    </HamburgerWrapper>
  );
};

type HamburgerProps = {
  open: boolean;
};

const HamburgerWrapper = styled.div<HamburgerProps>`
  width: 8vh;
  height: 8vh;

  cursor: pointer;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  z-index : 1006;

  ${({ open }) =>
    open === true &&
    css`
      #hs1 {
        transform: translateY(7px) rotate(45deg);
        transform-origin: 0% 50%;

        @media screen and (orientation: portrait) {
          transform: translateY(-4px) rotate(45deg);
        }
      }
      #hs3 {
        transform: translateY(2px) rotate(-45deg);
        transform-origin: 0% 50%;

        @media screen and (orientation: portrait) {
          transform: translateY(-7px) rotate(-45deg);
        }
      }
      #hs2 {
        opacity: 0;
      }
    `};
`;

const HamburgerStripe = styled.div`
  width: 7vh;
  height: 1vh;
  background-color: white;
  display: block;
  box-sizing: border-box;

  transition : 250ms;
`;

export default HamburgerButton;
