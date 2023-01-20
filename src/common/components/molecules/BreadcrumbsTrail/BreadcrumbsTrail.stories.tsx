import type { ComponentMeta } from '@storybook/react';
import { BreadcrumbsTrail } from './BreadcrumbsTrail';

export default {
  title: 'Design system/Molecules/BreadcrumbsTrail',
  component: BreadcrumbsTrail,
} as ComponentMeta<typeof BreadcrumbsTrail>;

export const Default = () => <BreadcrumbsTrail />;
