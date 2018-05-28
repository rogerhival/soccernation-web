import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from '../../../services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.css']
})
export class CompetitionFormComponent implements OnInit {

  @Input() competition: any;
  teams: any;

  constructor(private competitionService: CompetitionService,
    private route: ActivatedRoute,
    private location : Location) { }

  ngOnInit() {
    this.getCompetition();
  }

  getCompetition() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getCompetitionById(params['id']);
      }
      else {
        this.competition = { };
      }
    });
  }

  getCompetitionById(id: any) {
    this.competitionService.getCompetition(id)
      .subscribe((t) => {
        this.competition = t;
        this.getTeams(this.competition.id);
      }, (err) => {
        console.error(err);
      });
  }

  getTeams(competitionId: any) {
    this.competitionService.getTeams(competitionId).subscribe(data => {
      this.teams = data;
    });
  }

  saveEditCompetition() {
    if (this.competition.id) {
      this.competitionService.updateCompetition(this.competition.id, this.competition)
        .subscribe((t) => {
          this.location.back();
        });
    } else {
      this.competitionService.addCompetition(this.competition)
        .subscribe((t) => {
          this.location.back();
        });
    }
  }
}
