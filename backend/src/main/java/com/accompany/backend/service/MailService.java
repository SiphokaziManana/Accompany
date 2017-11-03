package com.accompany.backend.service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Session;
import java.util.Properties;

/**
 * Created by siphokazi on 2017/06/21.
 */
public class MailService {

    public void sendMail(String messageBody, String emailTo)
    {
        Properties props = new Properties(); //a
        props.put("mail.smtp.auth", "true");//a
        props.put("mail.smtp.starttls.enable", "true");//a
        props.put("mail.smtp.host", "smtp.gmail.com");//a
        props.put("mail.smtp.port", "587");//a

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("groupquadcore@gmail.com", "quadcore123");
                    }
                });//a

        try {//a //b
            Message message = new MimeMessage(session);//a
            message.setFrom(new InternetAddress("groupquadcore@gmail.com"));//a
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("siphokazi.manana@gmail.com"));//a
            message.setSubject("Welcome to Accompany");//a
            message.setText(messageBody);//a

            Transport.send(message);//a

        } catch (MessagingException e) {
            throw new RuntimeException(e); //b
        }
    }
}
