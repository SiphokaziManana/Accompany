
package com.accompany.backend.service;

import com.accompany.backend.domain.Client;
import com.accompany.backend.exception.CustomException;
import com.accompany.backend.repository.ClientRepository;

import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class ClientService {

    @Inject
    ClientRepository clientRepository;

    MailService mailService = new MailService();
    public void sendMail(){
        mailService.sendMail("Thank you for registering with Accompany", "siphokazi.manana@gmail.com");
    }

    public Client storeClientInformation(Client client){
        Client result = clientRepository.save(client);
        sendMail();
        return result;
    }

    public Client retrieveClientDetails(String email) throws CustomException{
        Client obj = clientRepository.findByClientEmail(email);
        if ( obj == null){
            throw new CustomException("Not Found", "The client you are searching for cannot be found");
        }
        return obj;
    }
}