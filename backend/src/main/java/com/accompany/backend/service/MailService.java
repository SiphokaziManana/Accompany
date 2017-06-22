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
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("groupquadcore@gmail.com", "quadcore123");
                    }
                });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("siphokazi.manana@gmail.com"));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(emailTo));
            message.setSubject("Welcome to Accompany");
            message.setText(messageBody);

            Transport.send(message);

            System.out.println("Registration Email Sent");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
