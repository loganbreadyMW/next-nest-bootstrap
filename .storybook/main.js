const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @type {import('@storybook/core-common').StorybookConfig} */
const storybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    postcss: false,
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
};

module.exports = storybookConfig;
