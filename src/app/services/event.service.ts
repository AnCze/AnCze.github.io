import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ITopic } from "../models/topic.model";

@Injectable()
export class EventService {

    constructor(private http: Http) {

    }

    getEvents(): Observable<ITopic[]> {
        return this.http.get('http://localhost:16169/' + 'api/blogtopics')
            .map(this.extractData)
            .catch(this.handleError);
    }    

    getEvent(id: number): Observable<ITopic> {
        return this.http.get('http://localhost:16169/' + 'api/blogtopic?id=' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    saveEvent(event: any): Observable<ITopic> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:16169/' + 'api/blogtopic', event, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }
}