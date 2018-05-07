import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompetitionService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {

  competition: any;

  constructor(private route: ActivatedRoute,
    private competitionService: CompetitionService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.getCompetition();
  }

  getCompetition(){
    const id = this.route.snapshot.paramMap.get('id');
    this.competitionService.getCompetition(id)
      .subscribe((t) => {
        this.competition = t
      }, (err) => {
        console.error(err);
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToStandings(): void {
    this.router.navigate(['standings', this.competition.id]);
  }
}
