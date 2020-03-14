package com.cts.user.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cts.user.email.Application;
import com.cts.user.email.EmailService;

@SpringBootApplication
public class Application implements CommandLineRunner{
	@Autowired
    private EmailService emailService;
 
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
     
    @Override
    public void run(String... args) 
    {
        emailService.sendMail("kothipranithareddy@gmail.com", "Hi", "Ho ho ho");
         
        emailService.sendPreConfiguredMail("Ho ho ho");
    }


}
