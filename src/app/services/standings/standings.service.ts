import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private api: Api) { }

  getStandings(idCompetition: string) {
    // console.log("getTeams service");
    return this.api.get(`competitions/${idCompetition}/ladder`);
  }
}
