import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, EntryRoutingModule, FormsModule],
})
export class EntryModule {}
