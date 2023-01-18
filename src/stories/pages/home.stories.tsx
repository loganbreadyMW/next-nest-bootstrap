import { default as HomePage } from '@pages/index';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Pages/Home',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Home: ComponentStory<typeof HomePage> = () => <HomePage />;
