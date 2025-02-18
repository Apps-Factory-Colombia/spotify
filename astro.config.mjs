import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import awsAmplify from 'astro-aws-amplify';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  adapter: awsAmplify(),
  output: 'server',
});