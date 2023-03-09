import { fileURLToPath, URL } from "node:url";

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
  build: {
    lib: {
      entry: './index.html',
      name: 'proampac-lca',
      // the proper extensions will be added
      fileName: 'proampac-lca'
    }
  },
  define: {
    'process.env': process.env
  },
  base: "./"
});
