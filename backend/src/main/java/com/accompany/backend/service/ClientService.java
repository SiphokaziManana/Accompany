
package com.accompany.backend.service;

import com.accompany.backend.domain.Client;
import com.accompany.backend.repository.ClientRepository;
import org.springframework.stereotype.Service;
import javax.inject.Inject;

@Service
public class ClientService {

    @Inject
    ClientRepository clientRepository;

    MailService mailService = new MailService();

    public Client storeClientInformation(Client client){
        Client result = clientRepository.save(client); //a
        try{ //a //b //c
            mailService.sendMail("Thank you for registering with Accompany", "siphokazi.manana@gmail.com"); ///a //b
        }
        catch (Exception e){
            System.out.println("Mail could not be sent");
            e.printStackTrace(); //c
        }

        return result; //a
    }

}