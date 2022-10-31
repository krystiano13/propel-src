import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PromotingTitle from '../components/Promoting/PromotingTitle';

export default {
    title: 'Promoting Title',
    component: PromotingTitle
} as ComponentMeta<typeof PromotingTitle>;

export const Default: ComponentStory<typeof PromotingTitle> = () => (
  <PromotingTitle
    boldText="Promoting your business and services with Propel: "
    otherText="A responsive, multi-page business template with everything you need propel your business."
  />
);