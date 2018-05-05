import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/teams/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

//  onSelect(team: Team){
//    this.selectedTeam = team;
//  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(h => this.teams = h.json());
  }
}
