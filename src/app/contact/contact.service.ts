/**
 * Created by siphokazi on 2017/06/16.
 */

import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Component} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
//import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class ContactService{

    constructor(private http: Http) {
        this.http = http;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});

    sendMail(fullName:string, email: string, query:string, contactAgain:boolean):Promise<any>{
        var jsonString =  JSON.stringify({
            clientName:fullName,clientEmail:email,clientQuery:query,contactClient:contactAgain});        
        
        return this.http.post('http://localhost:8080/api/client/addClient', jsonString, {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

}
