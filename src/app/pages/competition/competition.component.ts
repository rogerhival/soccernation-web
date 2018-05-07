import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services'

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitions: any;

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions(): void{
    //console.log('comp');
    this.competitionService.getCompetitions()
            .subscribe(c => this.competitions = c);
  }
}
