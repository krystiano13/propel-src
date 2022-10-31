import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContentElement from "../components/Content/ContentElement";

import ContentImage from "../images/contentImage1.jpg";

export default {
  title: "Content Element",
  component: ContentElement,
} as ComponentMeta<typeof ContentElement>;

export const Option1: ComponentStory<typeof ContentElement> = () => (
  <ContentElement
    left={false}
    text="Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed."
    bolderText="Ex tempor euismod sapientem ouis lexor pro."
    title=" Ad vix dicta iudico singulis, ius ex mollis veritus."
    imgSrc={ContentImage}
    xTranslation="0vh"
  />
);
