import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreClientAuthService {
  authToken = (Math.random() * 10).toString();
}
