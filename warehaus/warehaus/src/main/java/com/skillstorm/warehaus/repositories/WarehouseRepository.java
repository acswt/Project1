package com.skillstorm.warehaus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.warehaus.models.Product;

public interface WarehouseRepository extends JpaRepository<Product, Integer> {
    
}
