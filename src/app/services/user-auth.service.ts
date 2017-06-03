import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
//import "rxjs/Rx";

@Injectable()
export class UserAuthService {
    currentUser: IUser

    constructor(private http: Http) {

    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Andrzej',
            lastName: 'Czechowski'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    logout() {
        this.currentUser = undefined;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //below is observable which we create abowe
        return this.http.post('http://localhost:3100/logout', options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.fields || {};
    }

    private handleError(error: any) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }
}