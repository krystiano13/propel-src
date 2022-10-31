import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavButton from "../components/Navbar/NavButton";

let empty = "";

export default {
  title: "Navigation Button",
  component: NavButton,
} as ComponentMeta<typeof NavButton>;

export const Dot: ComponentStory<typeof NavButton> = () => (
  <NavButton category="dot">{empty}</NavButton>
);

export const NoBorder: ComponentStory<typeof NavButton> = () => (
  <NavButton category="noborder">Test</NavButton>
);

export const Border: ComponentStory<typeof NavButton> = () => (
  <NavButton category="border">Test</NavButton>
);

