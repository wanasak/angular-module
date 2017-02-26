import { Component, OnInit } from '@angular/core';

import { Contact, ContactServie } from './contact.service';
import { UserService } from '../core/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contact: Contact;
    contacts: Contact[];

    msg: string = 'Loading Contacts...';
    username: string = '';

    constructor(
        private contactService: ContactServie,
        private userService: UserService
    ) {
        this.username = userService.username;
    }

    ngOnInit() {
        this.contactService.getContacts()
            .then(contacts => {
                this.msg = '';
                this.contacts = contacts;
                this.contact = contacts[0];
            });
    }
    next() {
        let ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) { ix = 0; }
        this.contact = this.contacts[ix];
    }
    onSubmit() {
        this.displayMessage('Saved ' + this.contact.name);
    }
    newContact() {
        this.displayMessage('New contact');
        this.contact = { id: 42, name: ''};
        this.contacts.push(this.contact);
    }
    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }
}   