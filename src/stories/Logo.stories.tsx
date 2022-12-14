import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "../components/Navbar/Logo";

export default {
    title: 'Logo',
    component: Logo
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = () => <Logo />;
