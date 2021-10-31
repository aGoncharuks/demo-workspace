import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from '../types';

@Component({
  template: '<div [id]="appData.appName"></div>',
})
export class RouteContainerComponent implements AfterContentInit {
	public appData: AppData = this.route.snapshot.data as AppData;

	constructor(private route: ActivatedRoute) { }

	ngAfterContentInit(): void {

	  const { appName, exposedModulePath } = this.appData;

	  loadRemoteModule({
	    remoteName: appName,
	    exposedModule: exposedModulePath
	  }).then(module => {
	    module.default(appName);
	  })
	    .catch(err => console.error(`error loading ${appName}:`, err));
	}

}
