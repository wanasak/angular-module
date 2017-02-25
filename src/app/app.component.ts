import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title [subTitle]="subTitle"></app-title>
    <app-contact></app-contact>
  `
})
export class AppComponent {
  subTitle: String = '(v1)';
}