package com.example.backend.service;

import com.example.backend.entity.Gallery;
import com.example.backend.entity.GalleryId;
import com.example.backend.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {

    private final GalleryRepository galleryRepository;

    @Autowired
    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public List<Gallery> getImagesWithMake(String make) {
        return galleryRepository.findByIdMake(make);
        }

    public List<Gallery> getImagesWithModel(String model) {
        return galleryRepository.findByIdModel(model);
    }

    public List<Gallery> getImagesWithMakeAndModel(String make,String model) {
        return galleryRepository.findByIdMakeAndIdModel(make,model);
    }


    public List<Gallery> getAll(){
        return galleryRepository.findAll();
    }


}
