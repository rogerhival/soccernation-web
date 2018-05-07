import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isCreatingUser: any;

  account: { email: string, password: string } = {
      email: 'rogerhival@gmail.com',
      password: 'tonin@123'
  };

  constructor(private router: Router,
      private userService: UserService) { }
  
  ngOnInit() {
    
  }

  doLogin(): void {
    this.userService.login(this.account).subscribe((resp) => {
      this.router.navigate(['team']);
    }, (err) => {
      console.error(err);
    });
  }

  doSignUp(): void {
    this.isCreatingUser = true;
  }
}