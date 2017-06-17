package com.accompany.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accompany.backend.domain.*;
import com.accompany.backend.service.MailService;

@RestController
@RequestMapping("/api")
public class MailController{

    @Autowired
    MailService mailService;

    @RequestMapping( value = "/sendMail", method = RequestMethod.POST,
                    produces = MediaType.ALL_VALUE,
                    consumes = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<?> sendMail(@RequestBody MailObject mailObject){
            return new ResponseEntity<Object>(mailService.sendMail(), HttpStatus.ACCEPTED);
    }
}