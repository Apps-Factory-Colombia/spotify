import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import amplify from "astro-aws-amplify";
import compress from 'astro-compress';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react(), compress()],
  output: 'server',
  adapter: amplify()
});