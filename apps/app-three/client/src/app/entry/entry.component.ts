import { Component, OnInit } from '@angular/core';
import { CoreClientAuthService } from '@demo-workspace/core/auth';
import { coreClientMessageBus } from '@demo-workspace/core/client/message-bus';
import { coreClientPermissions } from '@demo-workspace/core/client/permissions';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
})
export class EntryComponent implements OnInit {
  value: string = '';
  constructor(public authService: CoreClientAuthService) {}

  ngOnInit() {
    coreClientPermissions();
    coreClientMessageBus();
  }
}
