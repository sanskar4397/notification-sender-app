import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/models-v1';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user : User
  constructor(
    private userService : UserServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.user = new User()
    this.user.id = 0;
  }


  onSubmit() {
    this.userService.saveUser(this.user)
    console.log(this.user)
    console.log("saved")
    if(this.user.id !=0) {
      this.router.navigate(['/login'], { queryParams : {email : this.user.email } } )
    } else {
      console.log('error')
    }
  }

}
