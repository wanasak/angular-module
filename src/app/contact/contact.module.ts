import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactServie } from './contact.service';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
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