import React from "react";
import styled from "styled-components";

import IlludImage from "./IlludImage";
import IlludTitle from "./IlludTitle";
import MoreAboutUs from "./MoreAboutUs";

const Illud = () => {
  return (
    <IlludWrapper>
      <IlludImage />
      <IlludTitle
        bolderText="Illud decore voluptaria has at. "
        text="Hinc invenire atomorum no vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo."
      />
          <MoreAboutUs />
          <BorderElement />
    </IlludWrapper>
  );
};

export default Illud;

const IlludWrapper = styled.div`
  width: 100vw;
  height: 115vh;

  @media screen and (orientation: portrait) {
    height : 75vh;
  }
`;

const BorderElement = styled.div`
  width: 50vw;
  margin-left: 25vw;
  height: 0.075vh;
  background-color: grey;
  opacity: 0.2;
  display: block;
  margin-top: 5vh;

  @media screen and (orientation: portrait) {
    width : 70vw;
    margin-left : 15vw;
  }
`;
