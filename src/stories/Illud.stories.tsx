import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Illud from '../components/Illud/Illud';

export default {
    title: 'Illud',
    component: Illud
} as ComponentMeta<typeof Illud>;

export const Default:ComponentStory<typeof Illud> = () => <Illud />