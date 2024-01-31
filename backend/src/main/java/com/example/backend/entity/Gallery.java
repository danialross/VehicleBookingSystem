package com.example.backend.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "gallery")
public class Gallery {
    @EmbeddedId
    private GalleryId id;
    private String image;

    public GalleryId getId() {
        return id;
    }

    public void setId(GalleryId id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
