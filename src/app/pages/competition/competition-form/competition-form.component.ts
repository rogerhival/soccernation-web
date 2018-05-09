import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from '../../../services';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.css']
})
export class CompetitionFormComponent implements OnInit {

  @Input() competition: any;

  constructor(private competitionService: CompetitionService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCompetition();
  }

  getCompetition() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.getCompetitionById(params['id']);
      }
    });

  }

  getCompetitionById(id: any) {
    this.competitionService.getCompetition(id)
      .subscribe((t) => {
        this.competition = t;
      }, (err) => {
        console.error(err);
      });
  }

  save() {

  }
}
