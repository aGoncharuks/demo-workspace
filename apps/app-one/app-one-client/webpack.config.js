const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'app_one',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_one',
      filename: 'remoteEntry.js',
      exposes: {
        './entryModule': 'apps/app-one/app-one-client/src/app/entry/entry.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
      },
    }),
  ],
};
