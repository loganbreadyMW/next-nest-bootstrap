import type { ComponentMeta } from '@storybook/react';
import { Search } from './Search';

export default {
  title: 'Atoms/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

export const Default = () => <Search placeHolder='Search' />;
