import React from "react";
import styled, { css } from "styled-components";

import Logo from "./Logo";
import NavButton from "./NavButton";
import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";

import NavButtonsData from "./NavButtonsData";
import headerContentArray from "../../views/headerContentArray";
import { NavLink } from "react-router-dom";

interface Nav {
  mobile: boolean;
}


type NavProps = {
  mobile: boolean;
  open: boolean;
};

const Navbar: React.FC<Nav> = ({ mobile }) => {
  const [open, setOpen] = React.useState(false);
  const openMenu = async () => {
    const op = open;
    await setOpen(!op);
  };
  return (
    <NavWrapper open={open} mobile={mobile}>
      {mobile === true ? (
        <HamburgerMenu open={open} />
      ) : null}
      <LeftContainer>
        <Logo />
      </LeftContainer>
      <RightContainer>
        {mobile === false ? (
          <>
            {NavButtonsData.map((item) => (
              <NavLink to={item.to}>
                <NavButton category={item.category}>
                  {item.content}
                </NavButton>
              </NavLink>
            ))}
          </>
        ) : (
          <HamburgerButton open={open} openMenu={openMenu} />
        )}
      </RightContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav<NavProps>`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;

  transition: background-color 250ms;

  ${({ open, mobile }) =>
    open === true &&
    mobile === true &&
    css`
      background-color: #5ab963;
    `}
`;

const LeftContainer = styled.div`
  width: 20vw;
  height: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  width: auto;
  height: 8vh;
  margin: 0;

  button {
    margin: 0;
  }

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
  box-sizing: border-box;

  @media screen and (orientation: portrait) {
    width: 70vw;
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5vh;
  }
`;

export default Navbar;
