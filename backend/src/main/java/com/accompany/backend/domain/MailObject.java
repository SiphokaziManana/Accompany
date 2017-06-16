
package com.accompany.backend.domain;

public class MailObject{

    String clientName;
    String clientEmail;
    String clientContent;
    Boolean contactClient;


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
}