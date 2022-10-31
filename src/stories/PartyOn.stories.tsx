import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PartyOn from '../components/PartyOn/PartyOn';

export default {
    title: 'Party On',
    component: PartyOn
} as ComponentMeta<typeof PartyOn>;

export const Default: ComponentStory<typeof PartyOn> = () => <PartyOn text='tkrhrtkhort' bolderText='hrthrtkhrt' />;