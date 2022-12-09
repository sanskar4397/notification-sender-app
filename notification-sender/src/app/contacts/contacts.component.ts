import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, ContactProperty } from '../models/models-v1';
import { ContactPropertyService } from '../services/contact-property.service';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactProperties : ContactProperty[];
  contacts : Contact[];
  constructor(
    private router : Router,
    private contactService : PeopleService,
    private contactPropertyService : ContactPropertyService
  ) { }

  ngOnInit(): void {
    this.contactProperties = this.contactPropertyService._contactProperties;
    this.contacts = this.contactService._contacts;
    console.log(this.contacts);
    console.log(this.contactProperties);
  }


  public addContact() {
    this.router.navigate(['contacts/add-contact'])
  }

}
