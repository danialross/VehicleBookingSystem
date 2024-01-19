package com.example.backend.repository;

import com.example.backend.entity.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomersRepository extends JpaRepository<Customers, Long> {
    // You can define additional query methods here if needed
}