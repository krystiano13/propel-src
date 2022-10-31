import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PromotingContent from "../components/Promoting/PromotingContent";

export default {
    title: 'Promoting Content',
    component: PromotingContent
} as ComponentMeta<typeof PromotingContent>;

export const Default:ComponentStory<typeof PromotingContent> = () => <PromotingContent Home={true} />
export const FeaturesVersion: ComponentStory<typeof PromotingContent> = () => (
  <PromotingContent Home={false} />
);