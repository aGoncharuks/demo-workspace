const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (config) => {
  nrwlConfig(config);

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin(
        {
          name: 'app_two',
          exposes: {
            './entryModule': 'apps/app-two/app-two-client/src/bootstrap.tsx',
          },
  				filename: "remoteEntry.js",
  				shared: {
  					"react": {
              singleton: true,
              strictVersion: true,
              requiredVersion: '17.0.2'
            },
  					"react-dom": {
              singleton: true,
              strictVersion: true,
              requiredVersion: '17.0.2'
            }
  				},
        }
      )
    ]
  };
};
