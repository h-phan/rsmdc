import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'linear-progress',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: 'components/rs-linear-progress/rs-mixins.scss' }
      ],
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'components/rs-linear-progress/_rs-mixins.scss' }
      ],
    }
  ],
  plugins: [
    sass({
      includePaths: ["../../node_modules"]
    })
  ]
};
