import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company = {
    name: '',
    email: '',
    password: '',
    isCompany: true
  };


  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {

  }

  doSignUp(): void {
    console.log(this.company);
    this.userService.signUp(this.company).subscribe((resp) => {
      this.router.navigate(['team']);
    }, (err) => {
      console.error(err);
    });
  }
}
