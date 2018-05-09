import { Injectable } from '@angular/core';
import { Api } from '../api/api'

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

  //updateCompetition(competition: Competition): Observable<any> {
  //  return this.http.put(this.competitionesUrl, competition, httpOptions).pipe(
  //    tap(_ => this.log(`updated competition id=${competition.id}`)),
  //    catchError(this.handleError<any>('updateCompetition'))
  //  );
  //}
}
