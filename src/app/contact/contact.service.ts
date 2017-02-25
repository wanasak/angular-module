import { Injectable } from '@angular/core';

export class Contact {
    constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
    new Contact(21, 'Sam Speed'),
    new Contact(22, 'Nick Peter'),
    new Contact(23, 'Nancy Drew')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactServie {
    getContacts() {
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
        });
    }
    getContact(id: number | string) {
        return this.getContacts()
            .then(contacts => contacts.find(contact => contact.id === id));
    }
}