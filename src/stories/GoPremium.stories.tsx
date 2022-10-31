import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GoPremium from "../components/Premium/GoPremium";

export default {
  title: "Go Premium",
  component: GoPremium,
} as ComponentMeta<typeof GoPremium>;

export const Default: ComponentStory<typeof GoPremium> = () => <GoPremium />;
