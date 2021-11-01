import { Component } from '@angular/core';
import { adminCompanyManagement } from '@demo-workspace/admin/company-management';

@Component({
  selector: 'dw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-client';

  constructor() {
    adminCompanyManagement();
  }
}
