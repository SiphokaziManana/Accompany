
package com.accompany.backend.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table ( name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column ( name = "id")
    Long id;

    @Column( name = "name")
    String clientName;

    @Column ( name = "email")
    String clientEmail;

    @Column ( name = "query")
    String clientContent;

    @Column ( name = "can_contact")
    Boolean contactClient;

    @Column ( name = "date_added")
    Date date;

    public Client(){
        clientName = "default";
        clientEmail = "default";
        clientContent = "default";
        contactClient = false;
        date = new Date();
    }

    public Client(String name, String email, String content, Boolean contact){
        clientName = name;
        clientEmail = email;
        clientContent = content;
        contactClient = contact;
        date = new Date();
    }


    public Long getId(){
        return this.id;
    }

    public void setClientName(String name){
        clientName = name;
    }
    public String getClientName(){
        return clientName;
    }

    public void setClientEmail(String email){
        clientEmail = email;
    }
    public String getClientEmail(){
        return clientEmail;
    }

    public void setClientContent( String content){
        clientContent = content;
    }
    public String getClientContent(){
        return clientContent;
    }

    public void setContactClient(Boolean val){
        contactClient = val;
    }
    public Boolean getContactClient(){
        return contactClient;
    }

    public void setDate( Date date){
        this.date = date;
    }
    public Date getDate(){
        return this.date;
    }
}