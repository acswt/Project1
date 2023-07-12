package com.skillstorm.warehaus.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import com.skillstorm.warehaus.models.Product;
import com.skillstorm.warehaus.models.Warehouse;
import com.skillstorm.warehaus.services.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:8080/products")
public class ProductController {
    
    @Autowired
    ProductService productService;

    // get a list of all products
    @GetMapping
    public ResponseEntity<List<Product>> findAllProducts() {
        
        List<Product> products = productService.findAllProducts();
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

    // find a product by the product id
    @GetMapping("/product/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable int id) {
        Product product = productService.findProductById(id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);

    }
    
        // create a new product
        @PostMapping("/product")
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {

        Product newProduct = productService.saveProduct(product);
        return new ResponseEntity<Product>(newProduct, HttpStatus.CREATED);

    }

    // update a product
    @PutMapping("/product")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {

        Product newProduct = productService.saveProduct(product);
        return new ResponseEntity<Product>(newProduct, HttpStatus.OK);

    }

    // delete a product
    @DeleteMapping("/product/{id}")
    public ResponseEntity<Warehouse> deleteProduct(@RequestBody Product product) {

        productService.deleteProduct(product);
        return ResponseEntity.noContent().build();

    }

}
