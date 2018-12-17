import { Component, OnInit, Input } from '@angular/core';
import { StandingsService } from '../../services';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  standings: any;
  competition: any;

  @Input()
  set setCompetition(competition: any) {
    this.competition = competition;
    this.getStandings();
  }

  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
  }

  getStandings() {
    if (this.competition != null) {
      this.standingsService.getStandings(this.competition.id)
        .subscribe((t) => {
          this.standings = t;
        }, (err) => {
          console.error(err);
        });
    }
  }
}
