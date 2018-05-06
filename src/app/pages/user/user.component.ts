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
    user: any;

    constructor(private route: ActivatedRoute,
          private userService: UserService,
          private location: Location) { }
      
    ngOnInit() {
        
    }
  
    doLogin(): void {
       
    }
  }