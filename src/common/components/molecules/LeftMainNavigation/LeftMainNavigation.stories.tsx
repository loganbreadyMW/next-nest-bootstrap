import type { ComponentMeta } from '@storybook/react';
import { LeftMainNavigation } from './LeftMainNavigation';
import { NavigationIcons } from './NavigationIcons';

export default {
  title: 'Design system/Molecules/LeftMainNavigation',
  component: LeftMainNavigation,
} as ComponentMeta<typeof LeftMainNavigation>;

export const Default = () => (
  <LeftMainNavigation
    navigationWidth={80}
    anchorDirection='left'
    backgroundColor={'#000'}
    navigationIcons={NavigationIcons}
  />
);
