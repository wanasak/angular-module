import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';

import { ContactModule } from './contact/contact.module';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }