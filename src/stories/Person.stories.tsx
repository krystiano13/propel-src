import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Person from '../components/Meet/Person';

export default {
    title: "Person",
    component: Person
} as ComponentMeta<typeof Person>;

export const Default: ComponentStory<typeof Person> = () => <Person ImageSrc='' name='John Smith' description='Smith in Chicago'/>