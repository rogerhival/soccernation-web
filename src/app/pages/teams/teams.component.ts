import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

//  onSelect(team: Team){
//    this.selectedTeam = team;
//  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe((h) => {
        this.teams = h;
      });
  }
}
