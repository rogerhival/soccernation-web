import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

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
