import React from "react";
import styled from "styled-components";

const MoreAboutUs = () => (
  <About href="https://www.google.com">MORE  ABOUT  US</About>
);

const About = styled.a`
  display: block;
  text-align: center;
  font-size: 1.5vh;
  cursor: pointer;
  text-decoration: none;
  color: #5ab963;
  width: 10vw;
  margin-top: 5vh;
  margin-left: 45vw;

  @media screen and (orientation: portrait) {
    width: 90vw;
    margin-left: 5vw;
    font-size : 1.8vh;
  }
`;

export default MoreAboutUs;
