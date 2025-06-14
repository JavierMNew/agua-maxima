// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import clerk from '@clerk/astro';
import netlify from '@astrojs/netlify';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), db()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  output: 'server',
});