/**
 * Created by siphokazi on 2017/05/19.
 */


export class ClientQuery{

    public id: number;
    public client_name: string;
    public client_email: string;
    public can_contact: boolean;
    public client_query?: string;

    //    model = new ClientQuery(1,"sfiso shabangu","sifisos@gmail.com", false, "hey there sipho");

    constructor( id_: number, name : string, email: string, contact : boolean, query : string){
        this.id = id_;
        this.client_name = name;
        this.client_email = email;
        this.can_contact = contact;
        this.client_query = query;
    }





}