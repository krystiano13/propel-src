import React from "react";
import styled from "styled-components";

import Logo from "../Navbar/Logo";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";

const LinkTitleStorage = [
  "Features",
  "About",
  "License Info",
  "Premium",
  "Blog",
  "Powered by",
  "Pricing",
  "Contact",
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Left>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <LeftParagraph>© 2018 Spoon Inc, All rights reserved.</LeftParagraph>
      </Left>
      <Right>
        <Links>
          {LinkTitleStorage.map((item) => (
            <Link href="https://www.google.com">{item}</Link>
          ))}
        </Links>
        <Social>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Social>
      </Right>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 40vh;
  background-color: #0a0e1a;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2,1fr);
  }
`;

const LogoWrap = styled.div`
  display: block;
  padding-left: 35vh;
  padding-top: 12vh;

  @media screen and (orientation: portrait) {
    padding : 0;
    padding-left : 4vh;
  }
`;

const Left = styled.div`
  width: 50vw;
  height: 40vh;

  @media screen and (orientation: portrait) {
    width: 100vw;
    height: 8vh;
  }
`;

const LeftParagraph = styled.p`
  font-size: 1.5vh;
  color: gray;
  opacity: 0.85;
  font-weight: 300;
  padding-left: 35vh;
  margin-top: 1vh;

  @media screen and (orientation: portrait) {
    padding: 0;
    padding-left : 4vh;
  }
`;

const Right = styled.div`
  width: 50vw;
  height: 40vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 100vw;
    height: 20vh;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: left;
  }
`;

const Links = styled.div`
  width: 18vw;
  height: 14vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: left;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 60vw;
    margin-left : 4vh;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2vh;
  cursor: pointer;
  text-align: left;
  font-weight: 600;
`;

const Social = styled.div`
  width: 6vw;
  height: 2vh;
  padding-top: 15vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-self: left;
  align-self: flex-start;
  transform: translateX(-2vw);

  @media screen and (orientation: portrait) {
    width: 70vw;
    padding-top: 1.5vh;
    transform: translateX(0vw);
  }
`;
