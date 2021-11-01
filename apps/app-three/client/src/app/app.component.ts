import { Component } from '@angular/core';
import { appThreeFunction } from './app-three-function';

@Component({
  selector: 'dw-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'App Three Micro Frontend';

  constructor() {
    appThreeFunction();
  }
}
