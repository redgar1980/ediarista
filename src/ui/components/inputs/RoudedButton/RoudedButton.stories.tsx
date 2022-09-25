import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundedButton from './RoudedButton';

export default {
    title: 'inputs/RoundeButton',
    component: RoundedButton
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => <RoundedButton {...args} >Clique Aqui</RoundedButton>;

export const Default = Template.bind({});
Default.args = {
    variant: 'contained',
}