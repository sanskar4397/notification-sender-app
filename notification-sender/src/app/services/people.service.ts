import { Injectable } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { Contact } from '../models/models-v1';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl : string = 'contact/';
  _contacts : Contact[] = [
    { id : Math.random(), name : "system anme", email : 'sys@mail.com', phone : 900000001 }
  ];

  constructor() { }

  saveContact(contact : Contact) {
    contact.id = Math.random();
   console.log(contact)
   this._contacts.push(contact)
  }

  getAllContacts() {
   return this._contacts;
  }

  deleteContact(contactId: number) {
    this._contacts = this._contacts.filter(c => {
      c.id !== contactId;
    });
  }

}
