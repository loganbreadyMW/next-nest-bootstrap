import type { ComponentMeta } from '@storybook/react';
import { DashboardGrid } from './DashboardGrid';

export default {
  title: 'organisms/DashboardGrid',
  component: DashboardGrid,
} as ComponentMeta<typeof DashboardGrid>;

export const Default = () => <DashboardGrid />;
