import { Injectable } from '@angular/core';
import { User } from '../models/models-v1';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  _currentUser : User;

  constructor() { }


 get currentUser() : User {
  return this._currentUser ;
 }
 set currentUser(user : User) {
  this._currentUser = user;
}

  saveUser (user : User) {
    user.id = Math.random()
    return user;
  }

  getLoggedInUser() : User {
    return this.currentUser;
  }


}
