
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Main = Template.bind({});

Main.args = {
    size: 'normal',
    type: 'outline',
    active: false,
    disabled: false,
    hasIcon: false,
    rounded: true
}