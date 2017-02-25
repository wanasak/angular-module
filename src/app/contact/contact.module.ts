import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';
import { ContactServie } from './contact.service';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent,
        HighlightDirective,
        AwesomePipe
    ],
    // exports: [ContactComponent],
    providers: [ContactServie]
})
export class ContactModule { }