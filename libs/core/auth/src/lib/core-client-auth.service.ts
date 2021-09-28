import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreClientAuthService {

  constructor() { }

  get authToken$(): Observable<string> {
    return of((Math.random() * 10).toString());
  }
}
