import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";

export default {
  title: "Hambureger Menu",
  component: HamburgerMenu,
} as ComponentMeta<typeof HamburgerMenu>;

export const Default: ComponentStory<typeof HamburgerMenu> = () => (
  <HamburgerMenu open={true} />
);
