import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from '../../../services';

@Component({
  selector: 'app-fixture-generate',
  templateUrl: './fixture-generate.component.html',
  styleUrls: ['./fixture-generate.component.css']
})
export class FixtureGenerateComponent implements OnInit {
  fixtures: any;
  idCompetition: string;

  constructor(private route: ActivatedRoute,
    private fixtureService: FixtureService) { }

  ngOnInit() {
    this.idCompetition = this.route.snapshot.paramMap.get('idCompetition');
  }

  generateFixtures() {
    this.fixtureService.generateFixtures(this.idCompetition).subscribe(f => this.fixtures = f);
  }

  saveFixtures() {
    this.fixtureService.saveGeneratedFixtures(this.idCompetition, this.fixtures).subscribe(f => console.log(f));
  }
}
