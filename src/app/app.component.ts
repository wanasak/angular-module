import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title [subTitle]="subTitle"></app-title>
    <nav>
      <a routerLink="contact" routerActive="active">Contact</a>
      <a routerLink="crisis" routerActive="active">Crisis Center</a>
      <a routerLink="heroes" routerActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subTitle: String = '(v1)';
}