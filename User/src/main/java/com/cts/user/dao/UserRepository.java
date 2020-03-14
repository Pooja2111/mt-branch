package com.cts.user.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.user.pojo.User;

public interface UserRepository extends CrudRepository<User, Integer>  {
	User findByUserNameAndPassword(String userName, String password);

	Optional<User> findByEmail(String emailId);

	User findByUserNameAndPasswordAndConfirmed(String userName, String password, String confirmed);



	

}


