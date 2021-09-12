const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0 <13.0.0' },
      },
    }),
  ],
};
