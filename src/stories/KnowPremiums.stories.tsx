import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import KnowPremiums from "../components/Content/KnowPremiums";

export default {
    title: 'Premium',
    component: KnowPremiums
} as ComponentMeta<typeof KnowPremiums>;

export const Default: ComponentStory<typeof KnowPremiums> = () => <KnowPremiums />;