package com.cts.sector.controller;

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

import com.cts.sector.dao.SectorRepository;
import com.cts.sector.pojo.Sector;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*") 
@RequestMapping("/sector")
public class SectorController {
	@Autowired
	private SectorRepository sectorRepository;
	@GetMapping("/getAllsector")
	public Iterable<Sector> getAllsector()
	{
		return sectorRepository.findAll();
	}
	@GetMapping("/findOneInAll3/{id}")
	 public Sector findOneInAll3(@PathVariable("id") int id)
	 {
	 Optional<Sector>sector= sectorRepository.findById(id);
	 return sector.get();
	 }
@PostMapping("/saveSector")
public Sector saveSector(@RequestBody Sector sector)
{
System.out.println(sector);
sectorRepository.save(sector);
return sector;
}
@PutMapping("/updateSector/{id}")
public Sector updateSector(@RequestBody Sector sector, @PathVariable("id")int id)
{
	sector.setId(id);
System.out.println(sector);
sectorRepository.save(sector);
return sector;
}
@DeleteMapping("/deleteSector/{id}")
public boolean deleteSector( @PathVariable("id") int id)
{
//System.out.println(sector);
sectorRepository.deleteById(id);
return true;

}
}
