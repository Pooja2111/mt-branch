package com.cts.companydata.controller;

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

import com.cts.companydata.JSONCompanyClient;
import com.cts.companydata.dao.CompanydataRepository;
import com.cts.companydata.pojo.Companydata;


@RestController
@CrossOrigin(origins="*",allowedHeaders="*") 
@RequestMapping("/companydata")
public class CompanydataController {
	
	@Autowired
	JSONCompanyClient jcompany;
	@Autowired
	private CompanydataRepository companyDataRepository;
	@GetMapping("/getAllCompanyData")
	public Iterable<Companydata> getAllCompanyData()
	{
		return companyDataRepository.findAll();
	}
	@GetMapping("/findOneInAll2/{id}")
	 public Companydata findOneInAll2(@PathVariable("companyName") Integer companyName)
	 {
	 Optional<Companydata>Companydata= companyDataRepository.findBycompanyName(companyName);
	 return Companydata.get();
	 }
@PostMapping("/savecompanydata")
public Companydata saveCompanyData(@RequestBody Companydata companydata)
{
System.out.println(companydata);
companyDataRepository.save(companydata);
return companydata;
}
@PutMapping("/updateCompanyData/{companyName}")
public Companydata updateCompanyData(@RequestBody Companydata companydata, @PathVariable("companyName" )String companyName)
{
	companydata.setCompanyName(companyName);
System.out.println(companydata);
companyDataRepository.save(companydata);
return companydata;
}
@DeleteMapping("/deleteCompanydata/{companyName}")
public boolean deleteCompanyData( @PathVariable("companyName") String companyName)
{
//System.out.println(companydata);
companyDataRepository.deleteById(companyName);
return true;

}


@GetMapping("/findOneInAll1/{companyName}")

 public Companydata findoneinall(@PathVariable("companyName") String companyName)

 {

 Optional<Companydata> company= companyDataRepository.findById(companyName);

 Companydata comp=company.get();

comp.setIpolist(jcompany.findByCompanyName(companyName));

 return company.get();

 }

}


