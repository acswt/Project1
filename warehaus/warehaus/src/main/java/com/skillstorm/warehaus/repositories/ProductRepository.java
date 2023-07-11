package com.skillstorm.warehaus.repositories;

import org.springframework.stereotype.Repository;
import com.skillstorm.warehaus.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    
}
