import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../../services';
import { Competition } from '../../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitions: Competition[];

  constructor(private competitionService: CompetitionService,
    private router: Router,
    private location: Location) { }

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

  onDeleteCompetition(id: any): void {
    this.competitionService.deleteCompetition(id).subscribe(c => console.log(c));
  }
}
