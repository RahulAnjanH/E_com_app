package com.example.Customer.service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Customer.service.model.Product;
import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByCategory(String category);
    List<Product> findByTagsContaining(String tag);
}