import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  apiRoot: 'http://localhost:65075';

  constructor(private http: Http) { }

  getTeam(id: string) {
    // console.log("getTeam by id service");
    const url = `${this.apiRoot}/api/teams/${id}`;
    return this.http.get(url);
  }

  getTeams() {
    // console.log("getTeams service");
    const url = `${this.apiRoot}/api/teams`;
    return this.http.get(url);
  }
}
