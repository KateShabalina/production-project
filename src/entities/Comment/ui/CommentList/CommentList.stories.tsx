import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'some comment',
      user: { id: '1', username: 'Igor' },
    },
    {
      id: '2',
      text: 'some comment 2',
      user: { id: '2', username: 'Robert' },
    },
  ],
};

export const isLoading = Template.bind({});
isLoading.args = {
  comments: [],
  isLoading: true,
};
