import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { ContactEnvelope } from '../models/contactEnvelope.model';

@Injectable()
export class FormPoster {

    constructor(private http: Http) {

    }

    posteContactEnvelope(contactEnvelope: ContactEnvelope): Observable<ContactEnvelope> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:16169/' + 'api/contact', contactEnvelope, options)
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