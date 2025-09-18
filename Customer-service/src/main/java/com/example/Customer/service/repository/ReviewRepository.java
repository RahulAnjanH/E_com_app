package com.example.Customer.service.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Customer.service.model.Review;
import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {
    List<Review> findByProductId(String productId);
    List<Review> findByUserId(String userId);
}