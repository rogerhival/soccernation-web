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
        console.log(this.selectedCompetition);
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

  getCompetitions(): void{
    this.competitionService.getCompetitions().subscribe(c => this.competitions = c);
  }

  onSelect(competitionId: any): void {
    //console.log(this.selectedCompetition.id + ' == ' + competitionId);
    
    //if (competitionId != null && this.selectedCompetition.id != competitionId) {
    //  console.log('partiu');
    //  this.router.navigate(['standings', competitionId]);
    //}
  }
}
