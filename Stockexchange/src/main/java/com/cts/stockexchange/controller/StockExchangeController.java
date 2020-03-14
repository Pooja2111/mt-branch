package com.cts.stockexchange.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.stockexchange.dao.StockexchangeRepository;
import com.cts.stockexchange.pojo.Stockexchange;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*") 
@RequestMapping("/stockexchange")
public class StockExchangeController {
	@Autowired
	private StockexchangeRepository stockExchangeRepository;
	@GetMapping("/getAllstockexchange")
	public Iterable<Stockexchange> getAllstockexchange()
	{
		return stockExchangeRepository.findAll();
	}
	@GetMapping("/findOneInAll4/{id}")
	 public Stockexchange findOneInAll4(@PathVariable("id") int id)
	 {
	 Optional<Stockexchange>stockExchange= stockExchangeRepository.findById(id);
	 return stockExchange.get();
	 }
@PostMapping("/savestockexchange")
public Stockexchange saveStockExchange(@RequestBody Stockexchange stockExchange)
{
System.out.println(stockExchange);
stockExchangeRepository.save(stockExchange);
return stockExchange;
}
@PutMapping("/updatestockexchange/{id}")
public Stockexchange updateStockExchange(@RequestBody Stockexchange stockExchange, @PathVariable("id")int id)
{
	stockExchange.setId(id);
System.out.println(stockExchange);
stockExchangeRepository.save(stockExchange);
return stockExchange;
}
@DeleteMapping("/deletestockexchange/{id}")
public boolean deletestockexchange(@PathVariable("id") int id)
{
//System.out.println(stockexchange);
stockExchangeRepository.deleteById(id);
return true;

}
}
