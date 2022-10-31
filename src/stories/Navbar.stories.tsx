import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from '../components/Navbar/Navbar';

export default {
    title: 'Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = () => <Navbar mobile={false} />;