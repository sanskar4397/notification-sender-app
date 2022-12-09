import { Injectable } from '@angular/core';
import { ContactProperty } from '../models/models-v1';

@Injectable({
  providedIn: 'root'
})
export class ContactPropertyService {

  _contactProperties : ContactProperty[] = [
    { id : Math.random(), label : "name" },
    { id : Math.random(), label : "email" },
    { id : Math.random(), label : "phone number" }
  ];
  constructor() { }


  getAll() : ContactProperty[] {
   return this._contactProperties;
  }

  addNew(property : ContactProperty) : ContactProperty {
    property.id = Math.random()
    this._contactProperties.push(property);
    return property;
  }

  delete(propertyId : number) {
    this._contactProperties = this._contactProperties.filter(
      p => p.id !== propertyId
    );
  }

  update(property : ContactProperty) : ContactProperty {
    this._contactProperties = this._contactProperties.filter(p => {
        if(p.id === property.id) {
          p.label = property.label;
        }
      });
      return property;
  }
}
