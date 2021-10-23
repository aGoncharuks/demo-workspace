import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DemoType } from '@demo-workspace/app-one-shared';
import { CoreClientAuthService } from '@demo-workspace/core/auth';
import { coreClientMessageBus } from '@demo-workspace/core/client/message-bus';
import { coreClientPermissions } from '@demo-workspace/core/client/permissions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.scss']
})
export class EntryComponent implements OnInit {
  data$: Observable<DemoType[]> = this.http.get<DemoType[]>(
    'http://localhost:3333/api/data'
  );

  constructor(private http: HttpClient,
              public authService: CoreClientAuthService) {}

  ngOnInit() {
    coreClientPermissions();
    coreClientMessageBus();
  }
}
