package com.example.backend.service;
import com.example.backend.entity.Cars;
import com.example.backend.repository.CarsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarsService {

    private final CarsRepository carsRepository;

    @Autowired
    public CarsService(CarsRepository carsRepository) {
        this.carsRepository = carsRepository;
    }

    public List<Cars> getAllCars() {
        return carsRepository.findAll();
    }
    public List<Cars> getCarsWithFuel(String fuel) {
        return carsRepository.findByFuel(fuel);
    }

    // Add other service methods as needed
}
