import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IlludImage from '../components/Illud/IlludImage';

export default {
    title: 'Illud Image',
    component: IlludImage
} as ComponentMeta<typeof IlludImage>;

export const Default: ComponentStory<typeof IlludImage> = () => <IlludImage />;