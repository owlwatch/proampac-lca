import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path';

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('proampac-lca')
        }
      }
    })
  ],
  // build: {
  //   lib: {
  //     entry: 'src/main.ce.ts',
  //     name: 'Proampac LCA',
  //     fileName: 'proampac-lca'
  //   }
  // },
  define: {
    'process.env': process.env
  },
  base: "./"
});
