import { Injectable } from '@angular/core';
import { Team } from '../team'
import { TEAMS } from '../teams/mock-teams'
import { Observable, of } from 'rxjs'
import { MessageService } from '../services/message.service'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(public messageService: MessageService) { }

  getTeams(): Observable<Team[]>{
    // TODO: send the message _after_ fetching the teams
    this.messageService.add('TeamService: fetched teams');
    return of(TEAMS);
  }

  getTeam(id: number): Observable<Team> {
    // TODO: send the message _after_ fetching the team
    this.messageService.add(`TeamService: fetched team id=${id}`);
    return of(TEAMS.find(team => team.id === id));
  }
}
