import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/models-v1';
import { AuthServiceService } from '../services/auth-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user : User
  accessToken : string;
  signedUpEmail : string;

  constructor(
    private route : ActivatedRoute,
    private userservice : UserServiceService,
    private router : Router,
    private authService : AuthServiceService
  ) { }

  ngOnInit(): void {
    this.user = new User()
    this.user.id = 0;

    this.route.queryParams
    .subscribe(params => {
      this.user.email = params.email;
    })
  }

  onSubmit() {
   this.accessToken = this.authService.login(this.user.email, this.user.password);
   if(this.accessToken) {

    this.userservice._currentUser = this.user;
    this.router.navigate(['/dashboard/home'])

   }
  }

}
