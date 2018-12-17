import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    _user: any;

    constructor(public api: Api) { }

    login(accountInfo: any) {
        const login = this.api.post('users/login', accountInfo).pipe(share());

        login.subscribe((res: any) => {
            console.log(res);
            if (res) {
                this._loggedIn(res);
            }
        }, err => {
            console.error('Error', err);
        });
        return login;
    }

    signUp(accountInfo: any) {
        const login = this.api.post('users', accountInfo).pipe(share());

        login.subscribe((res: any) => {
            if (res) {
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

    _loggedIn(user) {
        this._user = user;
    }
}
