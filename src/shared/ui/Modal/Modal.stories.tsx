import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, '
        + 'consectetur adipisicing elit. At aut enim fuga mollitia odit quis voluptate!\n'
        + ' {/* eslint-disable-next-line max-len \n'
        + 'Accusantium asperiores at exercitationem recusandae '
        + 'reiciendis repellat voluptas? Aliquam laboriosam\n'
        + 'libero perspiciatis quaerat tempore!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, '
        + 'consectetur adipisicing elit. At aut enim fuga mollitia odit quis voluptate!\n'
        + ' {/* eslint-disable-next-line max-len */}\n'
        + 'Accusantium asperiores at exercitationem recusandae '
        + 'reiciendis repellat voluptas? Aliquam laboriosam\n'
        + 'libero perspiciatis quaerat tempore!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
