package com.example.backend.entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class GalleryId implements Serializable {

    private String make;
    private String model;

    public GalleryId() {}

    public GalleryId(String make, String model) {
        this.make = make;
        this.model = model;
    }

    // Getters, setters, hashCode, and equals
    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }
    public String getMake() {
        return make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GalleryId galleryId = (GalleryId) o;
        return make.equals(galleryId.make) && model.equals(galleryId.model);
    }

    @Override
    public int hashCode() {
        return Objects.hash(make, model);
    }


}
