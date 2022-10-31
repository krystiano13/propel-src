import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Content from "../components/Content/Content";

export default {
    title: 'Content',
    component: Content
} as ComponentMeta<typeof Content>;

export const Default: ComponentStory<typeof Content> = () => <Content />;