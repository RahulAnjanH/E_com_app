package com.example.Customer.service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Customer.service.model.Order;
import java.util.List;

public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findByUserId(String userId);
    List<Order> findByStatus(String status);
}
