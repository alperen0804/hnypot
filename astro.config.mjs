import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://hnypot.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: cloudflare({
    imageService: 'compile'
  }),
  output: "server",
  adapter: cloudflare()
});