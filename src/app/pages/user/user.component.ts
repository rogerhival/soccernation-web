import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
  export class UserComponent implements OnInit {

    user = {
      firstName: '',
      lastName: '',
      login: '',
      password: '',
      player: '',
      manager: '',
      referee: ''
    };

    constructor(private route: ActivatedRoute,
          private userService: UserService,
          private location: Location) { }
      
    ngOnInit() {
        
    }
  
    doSignUp(): void {
       console.log(this.user);
    }
  }