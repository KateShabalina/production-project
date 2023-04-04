import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    { value: 'Tab 1', content: 'Tab 1' },
    { value: 'Tab 2', content: 'Tab 2' },
    { value: 'Tab 3', content: 'Tab 3' },
    { value: 'Tab 4', content: 'Tab 4' },
  ],
  value: 'Tab 2',
  onTabClick: action('onTabClick'),
};
