import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export const config: Config = {
  namespace: 'shadnext',
  autoprefixCss: true,
  taskQueue: 'async',
  sourceMap: false,
  buildEs5: 'prod',
  minifyCss: true,
  minifyJs: true,
  enableCache: true,
  globalStyle: 'src/global/styles.css',
  extras: {
    experimentalImportInjection: true,
  },
  plugins: [
    postcss({
      plugins: [
        tailwind(),
        autoprefixer(),
        cssnano({ preset: 'default' }),
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
