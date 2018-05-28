import { Injectable } from '@angular/core';
import { Api } from '../api/api'
import { Observable } from 'rxjs';
import { Competition } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  
  constructor(private api: Api) { }

  getCompetitions(){
    return this.api.getGeneric<Competition[]>('competitions');
  }

  getCompetition(id: string) {
    // console.log("getTeam by id service");
    const url = `competitions/${id}`;
    return this.api.getGeneric<Competition>(url);
  }

  addCompetition(competition: any){
    return this.api.post(`competitions`, competition);
  }

  updateCompetition(id: string, competition: any) {
    const url = `competitions/${id}`;
    return this.api.put(url, competition);
  }

  getTeams(competitionId: string) {
    const url = `competitions/${competitionId}/teams`;
    return this.api.get(url);
  }
}
