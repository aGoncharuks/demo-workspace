import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { DemoType } from '@shared/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html'
})
export class EntryComponent {
	value: string = '';
	apiResponse$: Observable<any[]> = this.http.get<any[]>('http://localhost:3333/api/data');

	constructor(private http: HttpClient) {
	}
}
