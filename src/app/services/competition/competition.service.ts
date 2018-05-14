import { Injectable } from '@angular/core';
import { Api } from '../api/api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private api: Api) { }

  getCompetitions(){
    //console.log('compserv');
    return this.api.get('competitions');
  }

  getCompetition(id: string) {
    // console.log("getTeam by id service");
    const url = `competitions/${id}`;
    return this.api.get(url);
  }

  putCompetition(id: string, competition: any) {
    const url = `competitions/${id}`;
    return this.api.put(url, competition);
  }
}
