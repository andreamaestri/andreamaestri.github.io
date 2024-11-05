import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  site: "https://andreamaestri.github.io",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  experimental: {
    contentLayer: true,
  },
  vite: {
      define: {
        'process.env.PUBLIC_CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.PUBLIC_CLOUDINARY_CLOUD_NAME),
        'process.env.PUBLIC_CLOUDINARY_API_KEY': JSON.stringify(process.env.PUBLIC_CLOUDINARY_API_KEY),
        'process.env.CLOUDINARY_API_SECRET': JSON.stringify(process.env.CLOUDINARY_API_SECRET),
      },
  },
});
