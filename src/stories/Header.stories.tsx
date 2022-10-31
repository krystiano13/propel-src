import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "../components/Header/Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => (
  <Header
    title="Propel your business."
    subtitle="Propel comes with everything you need to get your business rolling."
    subpageTitle="Test"
    colorBackground={false}
  />
);
export const Other: ComponentStory<typeof Header> = () => (
  <Header
    title="Propel your business."
    subtitle="Propel comes with everything you need to get your business rolling."
    subpageTitle="Test"
    colorBackground={true}
  />
);
