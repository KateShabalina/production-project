import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'select text',
  options: [
    { value: '123', content: 'first option' },
    { value: '456', content: 'second option' },
    { value: '789', content: 'third option' },
    { value: '010', content: 'fourth option' },
  ],
};
