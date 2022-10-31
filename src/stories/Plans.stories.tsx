import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Plans from "../components/Plans/Plans";

export default {
  title: "Plans",
  component: Plans,
} as ComponentMeta<typeof Plans>;

export const Default: ComponentStory<typeof Plans> = () => <Plans />;
