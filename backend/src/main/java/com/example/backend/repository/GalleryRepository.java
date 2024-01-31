package com.example.backend.repository;

import com.example.backend.entity.Gallery;
import com.example.backend.entity.GalleryId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GalleryRepository extends JpaRepository<Gallery, GalleryId> {
    // You can define additional query methods here if needed

    List<Gallery> findByIdModel(String model);
    List<Gallery> findByIdMake(String make);
    List<Gallery> findByIdMakeAndIdModel(String make,String model);


}