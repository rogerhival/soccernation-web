import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StandingsService } from '../../services';
import { CompetitionService } from '../../services'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  standings: any;
  competitions: any;
  selectedCompetition: any;

  constructor(private route: ActivatedRoute,
    private standingsService: StandingsService,
    private location: Location,
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitions();
    this.buildStandings();
  }

  buildStandings(){
    const idCompetition = this.route.snapshot.paramMap.get('idCompetition');

    if(this.selectedCompetition == null) {
      this.competitionService.getCompetition(idCompetition)
        .subscribe((t) => {
          this.selectedCompetition = t;
          console.log(this.selectedCompetition);
        }, (err) => {
          console.error(err);
        });
    }

    this.getStandings(idCompetition);
  }

  getStandings(idCompetition: string): void{
    this.standingsService.getStandings(idCompetition)
    .subscribe((t) => {
      this.standings = t;
    }, (err) => {
      console.error(err);
    });
  }

  getCompetitions(): void{
    this.competitionService.getCompetitions().subscribe(c => this.competitions = c);
  }

  onSelect(competition: any): void {
    console.log(this.selectedCompetition.id +' == '+ competition.id);

    if(competition != null && this.selectedCompetition.id != competition.id) {  
      this.selectedCompetition = competition;
      this.getStandings(competition.id);
    }
  }
}
