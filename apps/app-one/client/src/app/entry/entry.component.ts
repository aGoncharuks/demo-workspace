import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DemoType } from '@demo-workspace/app-one-shared';
import { coreClientMessageBus } from '@demo-workspace/core/client/message-bus';
import { coreClientPermissions } from '@demo-workspace/core/client/permissions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
})
export class EntryComponent implements OnInit {
  value: string = '';
  apiResponse$: Observable<DemoType[]> = this.http.get<DemoType[]>(
    'http://localhost:3333/api/data'
  );

  constructor(private http: HttpClient) {}

  ngOnInit() {
    coreClientPermissions();
    coreClientMessageBus();
  }
}
