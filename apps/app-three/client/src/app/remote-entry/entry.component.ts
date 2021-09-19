import { Component, OnInit } from '@angular/core';
import { coreClientMessageBus } from '@demo-workspace/core/client/message-bus';

@Component({
  selector: 'demo-workspace-app-three-client-entry',
  template: `<div class="remote-entry">
    <h2>app-three-client's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    coreClientMessageBus();
  }
}
