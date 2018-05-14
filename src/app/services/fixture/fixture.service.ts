import { Injectable } from '@angular/core';
import { Api } from '../api/api'

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private api: Api) { }

  generateFixtures(idCompetition: string) {
    const url = `competitions/${idCompetition}/generateFixtures`;
    return this.api.get(url);
  }

  saveGeneratedFixtures(idCompetition: string, fixtures: any) {
    const url = `competitions/${idCompetition}/fixtures`;
    return this.api.post(url, fixtures);
  }
}
