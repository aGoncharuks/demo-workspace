import { Component } from '@angular/core';
import { CoreClientAuthService } from '@demo-workspace/core/auth';
import { APP_REGISTRY } from '../remotes/app-registry';
import { NavigationMenuItem } from '../remotes/types';
import { buildMenuFromAppRegistry } from '../remotes/utils/router.utils';

@Component({
  selector: 'demo-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell-client';
  menuItems: NavigationMenuItem[] = buildMenuFromAppRegistry(APP_REGISTRY);

  constructor(public authService: CoreClientAuthService) {
  }

}
