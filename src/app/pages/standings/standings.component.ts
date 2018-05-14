import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandingsService } from '../../services';
import { CompetitionService } from '../../services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  standings: any;
  competitions: any;
  selectedCompetition: any;
  fixtures: any;
  index = 1;
  
  constructor(private route: ActivatedRoute,
    private standingsService: StandingsService,
    private router: Router,
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitions();
    this.buildStandings();
  }

  buildStandings(){
    const idCompetition = this.route.snapshot.paramMap.get('idCompetition');
    
    this.competitionService.getCompetition(idCompetition)
      .subscribe((t) => {
        this.selectedCompetition = t;
        this.getFixtures(t);
        this.getFixturesByRound(1);
      }, (err) => {
        console.error(err);
    });
    
    this.standingsService.getStandings(idCompetition)
      .subscribe((t) => {
        this.standings = t;
      }, (err) => {
        console.error(err);
    });
  }

  getFixtures(competition: any): void {
    if(competition)
      this.fixtures = competition.fixtures;
  }

  groupFixtures = {};
  fixtureDate = "";

  getFixturesByRound(round: any): void {
    this.fixtures.forEach(element => {
      this.groupFixtures[element.round] = this.groupFixtures[element.round] || [];
      this.groupFixtures[element.round].push({element});
    });
  }

  getCompetitions(): void{
    this.competitionService.getCompetitions()
      .subscribe(c => this.competitions = c);
  }

  subIndex(): void {
    if(this.index > 1)
      this.index -= 1;
  }

  addIndex(): void {
    this.index += 1;
  }

  onSelect(competitionId: any): void {
    //console.log(this.selectedCompetition.id + ' == ' + competitionId);
    
    //if (competitionId != null && this.selectedCompetition.id != competitionId) {
    //  console.log('partiu');
    //  this.router.navigate(['standings', competitionId]);
    //}
  }
}
