import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Plan from "../components/Plans/Plan";

export default {
  title: "Plan",
  component: Plan,
} as ComponentMeta<typeof Plan>;

export const Default: ComponentStory<typeof Plan> = () => (
  <Plan
    title="Test Title"
    subtitle="lorem ipsum dolor gthrthrtrt"
    price="420"
    text={["lorem ipsum"]}
  />
);
