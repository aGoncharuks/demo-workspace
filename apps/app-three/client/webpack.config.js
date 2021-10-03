const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../../tsconfig.base.json'), [
  '@demo-workspace/core/auth'
]);

module.exports = {
  output: {
    uniqueName: 'app_three',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_three',
      filename: 'remoteEntry.js',
      exposes: {
        './entryModule':
          'apps/app-three/client/src/app/entry/entry.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
