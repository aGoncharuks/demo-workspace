import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dw-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuditLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
