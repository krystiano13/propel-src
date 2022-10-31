import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Promoting from "../components/Promoting/Promoting";

export default {
  title: "Promoting",
  component: Promoting,
} as ComponentMeta<typeof Promoting>;

export const Default: ComponentStory<typeof Promoting> = () => <Promoting Home={true} />;
