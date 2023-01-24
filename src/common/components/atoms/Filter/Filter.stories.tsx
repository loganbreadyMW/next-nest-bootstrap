import type { ComponentMeta } from '@storybook/react';
import { Filter } from './Filter';

export default {
  title: 'Design system/Atoms/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

export const Default = () => <Filter label='Filters' options={['one', 'two', 'three']} />;
