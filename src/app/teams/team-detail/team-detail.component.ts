import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../../services/teams/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  @Input() team: any;

  constructor(private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id).subscribe(t => this.team = t.json());
  }

  goBack(): void {
    this.location.back();
  }

}
