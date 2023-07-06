package com.skillstorm.warehaus.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehaus.models.Product;
import com.skillstorm.warehaus.repositories.ProductRepository;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }
    
}
