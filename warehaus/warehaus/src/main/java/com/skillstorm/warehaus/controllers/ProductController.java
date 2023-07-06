package com.skillstorm.warehaus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import com.skillstorm.warehaus.models.Product;
import com.skillstorm.warehaus.services.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
    
    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> findAllProducts() {
        
        List<Product> products = productService.findAllProducts();
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

}
