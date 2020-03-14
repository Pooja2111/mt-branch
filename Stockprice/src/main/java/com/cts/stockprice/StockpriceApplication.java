package com.cts.stockprice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@EnableEurekaClient
@SpringBootApplication
public class StockpriceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockpriceApplication.class, args);
	}

}
