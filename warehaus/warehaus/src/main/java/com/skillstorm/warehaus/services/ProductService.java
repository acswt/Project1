package com.skillstorm.warehaus.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehaus.models.Product;
import com.skillstorm.warehaus.repositories.ProductRepository;

// products business logic
@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    // return a list of all products from database
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    // find a product by id passed from front end
    public Product findProductById(int id) {

        // if id passed matches an id in the database, return the product
        Optional<Product> product = productRepository.findById(id);

        if(product.isPresent()) {
            return product.get();
        }

        return null;

    }

        // save a product to the database
        public Product saveProduct(@Valid Product product) {
        
        return productRepository.save(product);

    }

        // update a product in the database
        public Product updateProduct(@Valid Product product) {
        
        return productRepository.save(product);

    }

        // delete a project from the database
        public void deleteProduct(Product product) {

            productRepository.delete(product);

        }
}
