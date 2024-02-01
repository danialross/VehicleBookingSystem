package com.example.backend.controller;

import com.example.backend.entity.*;
import com.example.backend.service.CustomersService;
import com.example.backend.service.GalleryService;
import com.example.backend.service.RentalsService;
import com.example.backend.service.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private RentalsService rentalsService;
    @Autowired
    private CarsService carsService;
    @Autowired
    private CustomersService customersService;

    @Autowired
    private GalleryService galleryService;

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

    @GetMapping("/images")
    public List<Gallery> getGallery(){return galleryService.getAll();}

    @GetMapping("/images/{make}")
    public List<Gallery> getImagesWithMake(@PathVariable String make){return galleryService.getImagesWithMake(make);}
    @GetMapping("/images/{make}/{model}")
    public List<Gallery> getImagesWithMakeAndModel(@PathVariable String make,@PathVariable String model){return galleryService.getImagesWithMakeAndModel(make,model);}

}
