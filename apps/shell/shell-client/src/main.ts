import { loadRemoteEntry } from '@angular-architects/module-federation';
import { APP_REGISTRY } from './remotes/app-registry';

Promise.all([
  APP_REGISTRY.map(
    ({ appName, remoteEntryHost }) => loadRemoteEntry(remoteEntryHost, appName)
  )
])
  .catch(error => {
    console.error('Could not load remote entries: ', error);
    console.log('Make sure you are serving all of your remotes and host names match!')
  })
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
