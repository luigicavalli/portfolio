import viteConfig                    from './vite.config';
import { defineConfig, mergeConfig } from 'vitest/config';


export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals:      true,
      environment:  'jsdom',
      setupFiles:   ['./src/test/setup.ts'],
      css:          true,
    },
  }),
);
