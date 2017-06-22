package com.accompany.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.accompany.backend.domain.*;
import com.accompany.backend.service.ClientService;

import javax.inject.Inject;

@RestController
@RequestMapping("/api/client")
public class ClientController {

   // @Autowired
    @Inject
    ClientService clientService;

    @CrossOrigin()
    @RequestMapping( value = "/addClient" , method = RequestMethod.POST)
    public ResponseEntity<Client> addClient(@RequestBody Client client){
            return new ResponseEntity<>(clientService.storeClientInformation(client), HttpStatus.ACCEPTED);
    }
}