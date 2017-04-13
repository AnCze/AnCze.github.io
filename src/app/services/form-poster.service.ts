import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { ContactEnvelope } from '../models/contactEnvelope.model';

@Injectable()
export class FormPoster {

    constructor(private http: Http){

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.fields || { };
    }

    private handleError(error: any) {
        console.error('post error: ', error); 
        return Observable.throw(error.statusText);
    }

    posteContactEnvelope( contactEnvelope: ContactEnvelope): Observable<any> {
        let body = JSON.stringify(contactEnvelope);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //below is observable which we create abowe
        return this.http.post('http://localhost:3100/postenvelope', body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

}