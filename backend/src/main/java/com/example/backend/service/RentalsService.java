package com.example.backend.service;

import com.example.backend.entity.Rentals;
import com.example.backend.repository.RentalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentalsService {

    private final RentalsRepository rentalsRepository;

    @Autowired
    public RentalsService(RentalsRepository rentalsRepository) {
        this.rentalsRepository = rentalsRepository;
    }

    public List<Rentals> getAllRentals() {
        return rentalsRepository.findAll();
    }

    // Add other service methods as needed
}
