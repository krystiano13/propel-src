import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StartButton from "../components/Header/StartButton";

export default {
    title: 'Start Button',
    component: StartButton
} as ComponentMeta<typeof StartButton>;

export const Default: ComponentStory<typeof StartButton> = () => <StartButton label="Get Started" />
