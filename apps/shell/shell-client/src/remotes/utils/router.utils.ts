import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { RouteContainerComponent } from '../route-container/route-container.component';
import { AppData, NavigationMenuItem } from '../types';


export const buildRoutesFromAppRegistry: (appRegistry: AppData[]) => Routes = (appRegistry) => {

  if (!Array.isArray(appRegistry)) {
    throw new Error('Provided app registry is not an array');
  }

  return appRegistry.map(appData => {

    const { appName, remoteEntryHost, exposedModulePath, isNative } = appData;

    if (isNative) {
      return {
        path: appName,
        loadChildren: () => loadRemoteModule({
          remoteEntry: remoteEntryHost,
          remoteName: appName,
          exposedModule: exposedModulePath
        }).then(m => m.EntryModule)
      }
    }
    return {
      path: appName,
      component: RouteContainerComponent,
      data: appData
    }
  });
}


export const buildMenuFromAppRegistry: (appRegistry: AppData[]) => NavigationMenuItem[] = (appRegistry) => {

  if (!Array.isArray(appRegistry)) {
    throw new Error('Provided app registry is not an array');
  }

  return appRegistry.map(({ appName, displayName }) => ({
    displayName,
    path: `/${appName}`,
  }));
}
