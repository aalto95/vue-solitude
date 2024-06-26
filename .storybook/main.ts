import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {},
  staticDirs: [
    // {
    //     from: '../src/assets/fonts',
    //     to: '/fonts'
    // },
    // {
    //     from: '../src/assets/images',
    //     to: '/images'
    // }
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import("../vite.config.js")).default,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
      build: {
        rollupOptions: {
          external: ["@storybook/window"],
        },
      },
    });
  },
  docs: {},
};

export default config;
