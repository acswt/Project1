package com.skillstorm.warehaus.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

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

    public Product findProductById(int id) {

        Optional<Product> product = productRepository.findById(id);

        if(product.isPresent()) {
            return product.get();
        }

        return null;

    }

        public Product saveProduct(@Valid Product product) {
        
        return productRepository.save(product);

    }

        public Product updateWarehouse(@Valid Product product) {
        
        return productRepository.save(product);

    }

        public void deleteProduct(Product product) {

            productRepository.delete(product);

        }
}
