// @ts-nocheck
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import * as fs from 'fs';
import {baseParse} from '@vue/compiler-core';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const {code, path} = options;
      const file = fs.readFileSync(path).toString();
      const parsed = baseParse(file).children.find(n => n.tag === 'demo');
      const title = parsed.children[0].content;
      const main = file.split(parsed.loc.source).join('').trim();
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
      }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    }
  }
});
