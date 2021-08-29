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
	// apiResponse$: Observable<DemoType[]> = this.http.get<DemoType[]>('http://localhost:3000/data');

	constructor(private http: HttpClient) {
	}
}
