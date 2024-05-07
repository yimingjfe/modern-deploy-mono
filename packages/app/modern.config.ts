import { appTools, defineConfig } from '@modern-js/app-tools';
import { bffPlugin } from '@modern-js/plugin-bff';
import { expressPlugin } from '@modern-js/plugin-express';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    bffPlugin(),
    expressPlugin(),
  ],
});
