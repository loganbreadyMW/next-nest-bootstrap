import type { ComponentMeta } from '@storybook/react';
import { LeftMainSlideOutSubNavigation } from './LeftMainSlideOutSubNavigation';

export default {
  title: 'Design system/Molecules/LeftMainSlideOutSubNavigation',
  component: LeftMainSlideOutSubNavigation,
} as ComponentMeta<typeof LeftMainSlideOutSubNavigation>;

export const Default = () => (
  <LeftMainSlideOutSubNavigation anchorSide='right' navigationWidth={'100vw'} />
);
