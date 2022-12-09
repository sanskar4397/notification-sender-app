import { Injectable } from '@angular/core';
import { User } from '../models/models-v1';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(email : string, password : string) {
    let creds : string = email + '::' + password;
    console.log(creds);
    console.log('loggedin');
    let accessToken = "my_access_token::" + creds;
    return accessToken;
  }

}
