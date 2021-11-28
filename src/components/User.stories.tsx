import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Users as UserContents } from '../contents/Books.content';
import User from './User';

export default {
  title: 'components/User',
  component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  user: UserContents[0],
};
