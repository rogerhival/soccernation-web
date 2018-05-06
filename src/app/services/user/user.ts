import { Injectable } from "@angular/core";
import { Api } from '../api/api';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    _user:any;

    constructor(public api: Api){}

    login(accountInfo: any) {
        let login = this.api.post('users/login', accountInfo);

        login.subscribe((res: any) => {
            console.log(res);
            if(res) {
                this._loggedIn(res);
            }
        }, err => {
            console.error('Error', err);
        });
        return login;
    }

    signUp(accountInfo: any) {
        let login = this.api.post('user', accountInfo);

        login.subscribe((res: any) => {
            if(res) {
                this._loggedIn(res);
            }
        }, err => {
            console.error('Error', err);
        });
        return login;
    }

    logout() {
        this._user = null;
    }

    _loggedIn(user){
        this._user = user;
    }
}
