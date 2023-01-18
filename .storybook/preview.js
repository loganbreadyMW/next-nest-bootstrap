import '@styles/main.scss';
import NextImage from 'next/image';
import { RecoilRoot } from 'recoil';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design System',
        [
          'Atoms',
          ['Inputs', 'Data Display', 'Feedback', 'Navigation', 'Others'],
          'Molecules',
          'Organisms',
          'Templates',
        ],
        'Pages',
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
];
