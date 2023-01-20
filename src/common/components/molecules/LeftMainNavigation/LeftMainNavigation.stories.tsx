import type { ComponentMeta } from '@storybook/react';
import { LeftMainNavigation } from './LeftMainNavigation';

export default {
  title: 'Design system/Molecules/LeftMainNavigation',
  component: LeftMainNavigation,
} as ComponentMeta<typeof LeftMainNavigation>;

export const Default = () => (
  <LeftMainNavigation
    anchorSide='left'
    navigationWidth={80}
    desktopBackgroundColor='#000'
    mobileBackgroundColor='#fff'
  />
);
