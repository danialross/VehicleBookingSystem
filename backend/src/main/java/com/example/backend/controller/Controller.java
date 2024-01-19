package com.example.backend.controller;

import com.example.backend.entity.Rentals;
import com.example.backend.service.RentalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private RentalsService rentalsService;

    @GetMapping("/data")
    public List<Rentals> hello(){
        return(rentalsService.getAllRentals());
    }

}
