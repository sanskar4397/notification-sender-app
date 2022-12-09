import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userEmail : string;
  constructor(
    private userService : UserServiceService
  ) { }

  ngOnInit(): void {
    this.userEmail = this.userService.getLoggedInUser().email;

  }

}
