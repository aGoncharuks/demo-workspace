import { AppData, AppName } from './types';

export const APP_REGISTRY: AppData[] = [
  {
    appName: AppName.AppOne,
    route: AppName.AppOne,
    displayName: 'Micro Frontend One',
    remoteEntryHost: 'http://localhost:5100/remoteEntry.js',
    exposedModulePath: './entryModule',
    isNative: true
  },
  // {
  //   appName: AppName.AppTwo,
  //   route: AppName.AppTwo,
  //   displayName: 'React Micro Frontend',
  //   remoteEntryHost: 'http://localhost:5200/remoteEntry.js',
  //   exposedModulePath: './entryModule',
  //   isNative: false
  // },
  {
    appName: AppName.AppThree,
    route: AppName.AppThree,
    displayName: 'Micro Frontend Three',
    remoteEntryHost: 'http://localhost:5300/remoteEntry.js',
    exposedModulePath: './entryModule',
    isNative: true
  },
];
