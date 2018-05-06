import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
  export class UserComponent implements OnInit {

    @Input() user: {
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
  
    doSignUp(accountInfo: any): void {
       console.log(accountInfo);
    }
  }