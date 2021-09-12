import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_REGISTRY } from '../remotes/app-registry';
import { RouteContainerComponent } from '../remotes/route-container/route-container.component';
import { buildRoutesFromAppRegistry } from '../remotes/utils/router.utils';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RouteContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      ...buildRoutesFromAppRegistry(APP_REGISTRY),
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
