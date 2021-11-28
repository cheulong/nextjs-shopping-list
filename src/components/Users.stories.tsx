import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Users as UserContents } from '../contents/Users.content';
import Users from './Users';

export default {
  title: 'components/Users',
  component: Users,
} as ComponentMeta<typeof Users>;

const Template: ComponentStory<typeof Users> = (args) => <Users {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  users: UserContents,
};
