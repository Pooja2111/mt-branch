package com.cts.companydata.dao;



import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.companydata.pojo.Companydata;

public interface CompanydataRepository extends CrudRepository<Companydata, String> {

	Optional<Companydata> findBycompanyName(Integer companyName);

	


}
