package com.cts.ipos.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cts.ipos.pojo.Ipos;

public interface IposRepository extends CrudRepository<Ipos, Integer>{

	Iterable<Ipos>findAll();
	List<Ipos> findByCompanyName(String companyName);

}
