import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private api: Api) { }

  getTeam(id: string) {
    // console.log("getTeam by id service");
    const url = `teams/${id}`;
    return this.api.get(url);
  }

  getTeams() {
    // console.log("getTeams service");
    return this.api.get('teams');
  }

  addTeam(teamInfo: any) {
    return this.api.post('teams', teamInfo);
  }

  updateTeam(teamInfo: any) {
    const url = `teams/${teamInfo.id}`;
    return this.api.put(url, teamInfo);
  }
}
