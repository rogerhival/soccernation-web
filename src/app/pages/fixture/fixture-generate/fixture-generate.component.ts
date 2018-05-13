import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture-generate',
  templateUrl: './fixture-generate.component.html',
  styleUrls: ['./fixture-generate.component.css']
})
export class FixtureGenerateComponent implements OnInit {
  fixtures: any;

  constructor() { }

  ngOnInit() {
  }

}
