import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminChangeAuditModule } from '@demo-workspace/admin/change-audit';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, EntryRoutingModule, FormsModule, HttpClientModule, AdminChangeAuditModule]
})
export class EntryModule {}
