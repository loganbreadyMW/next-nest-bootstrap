import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Design System/Atoms/Input/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  color: 'default',
  disabled: false,
  onClick: () => {
    alert('clicked');
  },
  variant: 'contained',
  size: 'medium',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  color: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  color: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  color: 'info',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
