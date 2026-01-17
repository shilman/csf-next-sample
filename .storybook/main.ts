import { defineMain } from '@storybook/react-vite/node';
export default defineMain({
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    'storybook-addon-tag-badges',
  ],
  framework: '@storybook/react-vite',
  features: {
    experimentalTestSyntax: true,
  },
});
