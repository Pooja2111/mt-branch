package com.cts.ipos.controller;

import java.util.List;
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

import com.cts.ipos.dao.IposRepository;
import com.cts.ipos.pojo.Ipos;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*") 
@RequestMapping("/ipos")
public class IposController {
	@Autowired
	private IposRepository iposRepository;
	@GetMapping("/getAllipos")
	public Iterable<Ipos> getAllipos()
	{
		return iposRepository.findAll();
	}
	@GetMapping("/findOneInAll2/{id}")
	 public Ipos findOneInAll2(@PathVariable("id") int id)
	 {
	 Optional<Ipos>ipos= iposRepository.findById(id);
	 return ipos.get();
	 }
@PostMapping("/saveIpos")
public Ipos saveIpos(@RequestBody Ipos ipos)
{
System.out.println(ipos);
iposRepository.save(ipos);
return ipos;
}
@PutMapping("/updateIpos/{id}")
public Ipos updateIpos(@RequestBody Ipos ipos, @PathVariable("id")int id)
{
	ipos.setId(id);
System.out.println(ipos);
iposRepository.save(ipos);
return ipos;
}
@DeleteMapping("/deleteipos/{id}")
public boolean deleteIpos( @PathVariable("id") int id)
{
//System.out.println(ipos);
iposRepository.deleteById(id);
return true;

}

@GetMapping("/findByCompanyName/{companyName}")

 public List<Ipos> findByCompanyName(@PathVariable("companyName") String companyName)

 {

 List<Ipos> ipo = iposRepository.findByCompanyName(companyName);

 return ipo;

 }

}


