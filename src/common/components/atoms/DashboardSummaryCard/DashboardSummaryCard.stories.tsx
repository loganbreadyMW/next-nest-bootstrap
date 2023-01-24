import type { ComponentMeta } from '@storybook/react';
import { DashboardSummaryCard } from './DashboardSummaryCard';

export default {
  title: 'Design System/Atoms/Dashboard/DashboardSummaryCard',
  component: DashboardSummaryCard,
} as ComponentMeta<typeof DashboardSummaryCard>;

export const Default = () => (
  <DashboardSummaryCard
    cardTitle='Overall Client Health'
    cardContentLeft='8/10'
    cardContentRight='2%'
    isPositive={true}
  />
);
