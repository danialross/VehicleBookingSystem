package com.example.backend.repository;

import com.example.backend.entity.Rentals;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalsRepository extends JpaRepository<Rentals, Long> {
    // You can define additional query methods here if needed
}