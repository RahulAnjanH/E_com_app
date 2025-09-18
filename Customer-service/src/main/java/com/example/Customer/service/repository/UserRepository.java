package com.example.Customer.service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Customer.service.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email); // custom finder
}