export enum AppName {
	AppOne = 'app_one',
	AppTwo = 'app_two'
}

export interface AppData {
  appName: AppName,
	route: AppName,
	remoteEntryHost: string,
  exposedModulePath: string,
	isNative: boolean,
  displayName: string
}

export interface NavigationMenuItem {
  displayName: string,
  path: string
}
