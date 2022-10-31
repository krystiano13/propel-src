import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StartTitle from "../components/Header/StartTitle";

export default {
  title: "Start Title",
  component: StartTitle,
} as ComponentMeta<typeof StartTitle>;

export const Title: ComponentStory<typeof StartTitle> = () => (
  <StartTitle colorBackground={false} subtitle={false} color="black" text="Propel your business." />
);

export const SubTitle: ComponentStory<typeof StartTitle> = () => (
  <StartTitle
    subtitle={true}
    color="black"
    text="Propel comes with everything you need to get your business rolling."
    colorBackground={false}
  />
);


