
import React from 'react'

import { Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from './Avatar'

const avatarImage = 'https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Main = Template.bind({});

Main.args = {
  size: 'large',
  src: avatarImage,
  alt: 'Profile image',
  initials: 'BM'
}