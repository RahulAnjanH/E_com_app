package com.example.Customer.service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Customer.service.model.Customer;

public interface CustomerRepository  extends MongoRepository<Customer,String>{
	Customer findByEmail(String email);
}