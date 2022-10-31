import React from "react";
import styled from "styled-components";

import ContentElement from "./ContentElement";
import ContentImage1 from "../../images/contentImage1.jpg";
import ContentImage2 from "../../images/contentImage2.jpg";

const Content = () => {
  return (
    <ContentWrapper>
      <ContentElement
        imgSrc={ContentImage1}
        left={true}
        text="Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed."
        bolderText="Ex tempor euismod sapientem ouis lexor pro."
        title=" Ad vix dicta iudico singulis, ius ex mollis veritus."
        xTranslation="-5vw"
      />
      <ContentElement
        imgSrc={ContentImage2}
        left={false}
        text="Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt."
        bolderText="Te elit antiopam vix zril recusabo ut pri. "
        title=" Quas suscipit ad mea verear vivendo tincidunt."
        xTranslation="5vw"
      />
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  @media screen and (orientation: portrait) {
    height : 150vh;
    overflow: hidden;
  }

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;
