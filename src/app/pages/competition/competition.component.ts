import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../services';
import { Competition } from '../../models';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitions: Competition[];

  constructor(private competitionService: CompetitionService,
    private router: Router) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions(): void{
    //console.log('comp');
    this.competitionService.getCompetitions()
            .subscribe(c => this.competitions = c);
  }

  onEditCompetition(id: any): void {
    const url = `competition/${id}/edit`;
    this.router.navigateByUrl(url);
  }
}
