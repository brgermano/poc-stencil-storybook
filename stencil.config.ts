import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'brgermano-poc-storybook',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'brgermano-poc-storybook',
      proxiesFile: '../../generated/ui-components-react/src/components.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
