import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactServie } from './contact.service';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContactRoutingModule,
        SharedModule
    ],
    declarations: [
        ContactComponent
    ],
    // exports: [ContactComponent],
    providers: [ContactServie]
})
export class ContactModule { }