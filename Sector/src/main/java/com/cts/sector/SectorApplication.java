package com.cts.sector;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@EnableEurekaClient
@SpringBootApplication
public class SectorApplication {

	public static void main(String[] args) {
		SpringApplication.run(SectorApplication.class, args);
	}

}
