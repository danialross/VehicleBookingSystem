package com.example.backend.repository;

import com.example.backend.entity.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarsRepository extends JpaRepository<Cars, Long> {

    List<Cars> findByFuel(String fuel);
}
