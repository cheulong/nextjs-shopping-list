import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  handleClick: () => {},
  bookId: 1,
  isAddButton: true,
};

export const RemoveButton = Template.bind({});
RemoveButton.args = {
  handleClick: () => {},
  bookId: 1,
  isAddButton: false,
};
