package com.example.backend.controller;

import com.example.backend.entity.Customers;
import com.example.backend.entity.Rentals;
import com.example.backend.service.CustomersService;
import com.example.backend.service.RentalsService;
import com.example.backend.entity.Cars;
import com.example.backend.service.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private RentalsService rentalsService;
    @Autowired
    private CarsService carsService;
    @Autowired
    private CustomersService customersService;

    @GetMapping("/cars")
    public List<Cars> getCars() {
        return (carsService.getAllCars());
    }

    @GetMapping("/cars/{fuel}")
    public List<Cars> getCarsByFuel(@PathVariable String fuel) {
        return (carsService.getCarsWithFuel(fuel));
    }


    @GetMapping("/rentals")
    public List<Rentals> getRentals(){
        return(rentalsService.getAllRentals());
    }

    @GetMapping("/customers")
    public List<Customers> getCustomers(){
        return(customersService.getAllCustomers());
    }
}
