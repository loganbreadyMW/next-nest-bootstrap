import type { ComponentMeta } from '@storybook/react';
import { Profile } from './Profile';

export default {
  title: 'Design system/Atoms/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

export const Default = () => (
  <Profile profileHeight={40} profileWidth={40} src='/images/Avatar.png' alt='Avatar' />
);
