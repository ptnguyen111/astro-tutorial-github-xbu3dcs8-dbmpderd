// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://deploy-preview-5--astro-tutorial-blog-01.netlify.app/',
  integrations: [preact()],
});