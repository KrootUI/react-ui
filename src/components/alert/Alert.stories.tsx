import React from 'react';
import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
  title: 'Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args}>
    This is an alert
</Alert>

export const Main = Template.bind({});

Main.args = {
    intent: 'none',
    onClose: () => { console.log('close'); }, 
};