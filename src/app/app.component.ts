import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-title [subTitle]="subTitle"></app-title>'
})
export class AppComponent {
  subTitle: String = '(v1)';
}