import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from '../../../services';
import { Competition } from '../../../models';

@Component({
  selector: 'app-competition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.css']
})
export class CompetitionOverviewComponent implements OnInit {
  index = 1;
  fixtures: any;
  competition: Competition;

  groupFixtures = {};

  constructor(private route: ActivatedRoute,
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetition();
  }

  getCompetition() {
    const idCompetition = this.route.snapshot.paramMap.get('idCompetition');

    this.competitionService.getCompetition(idCompetition)
      .subscribe((t) => {
        this.competition = t;
        this.fixtures = this.competition.fixtures;
        this.getFixturesByRound(1);
      }, (err) => {
        console.error(err);
      });
  }

  getFixturesByRound(round: any): void {
    this.fixtures.forEach(element => {
      this.groupFixtures[element.round] = this.groupFixtures[element.round] || [];
      this.groupFixtures[element.round].push({ element });
    });
  }

  subIndex(): void {
    if (this.index > 1) {
      this.index -= 1;
    }
  }

  addIndex(): void {
    this.index += 1;
  }
}
