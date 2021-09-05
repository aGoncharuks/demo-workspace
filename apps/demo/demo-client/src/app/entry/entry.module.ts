import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
	  FormsModule,
	  HttpClientModule
  ]
})
export class EntryModule { }