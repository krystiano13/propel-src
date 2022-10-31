import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HamburgerButton from '../components/Navbar/HamburgerButton';

export default {
    title: 'Hamburger Button',
    component: HamburgerButton
} as ComponentMeta<typeof HamburgerButton>;

export const Default: ComponentStory<typeof HamburgerButton> = () => <HamburgerButton open={false} openMenu={async () => {}}></HamburgerButton>;