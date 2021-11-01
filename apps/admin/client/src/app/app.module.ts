import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminChangeAuditModule } from '@demo-workspace/admin/change-audit';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    AdminChangeAuditModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
