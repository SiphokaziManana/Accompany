/**
 * Created by siphokazi on 2017/05/19.
 */
import { Component } from '@angular/core';
import { ClientQuery } from './client-query.component';
import { ContactService } from './contact.service';

@Component({
    selector: 'contact',
    templateUrl:'./contact.component.html',
    providers: [ContactService]
})
export class ContactComponent  {
    
    model = new ClientQuery(1,"sfiso shabangu","sifisos@gmail.com", false, "hey there sipho");
    //model =  new ClientQuery();
    submitted = false;
    //service = new ContactService();

    /*constructor(http_: HttpModule){
        this.http = http_;
    }*/

    constructor( private service: ContactService){

    }

    onSubmit(){
        this.submitted = true;
        console.log("i have submitted");
        console.log(JSON.stringify(this.model));

        //http calls to backend application
        this.service.sendMail(this.model.client_name, this.model.client_email, this.model.client_query,
            this.model.can_contact);

        console.log("sent to backend, just check");
    }

    //TODO: Remove this when done
    public get diagnostic() : string{
        return JSON.stringify(this.model);
    }
}