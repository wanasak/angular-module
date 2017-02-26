import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    TitleComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }