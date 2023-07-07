package com.skillstorm.warehaus.controllers;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehaus.models.Warehouse;
import com.skillstorm.warehaus.services.WarehouseService;

@RestController
@RequestMapping("/warehouses")
public class WarehouseController {
    
    @Autowired
    WarehouseService warehouseService;

    @GetMapping
    public ResponseEntity<List<Warehouse>> findAllWarehouses() {

        List<Warehouse> warehouses = warehouseService.findAllWarehouses();
        return new ResponseEntity<List<Warehouse>>(warehouses, HttpStatus.OK);

    }

    @GetMapping("/warehouses/{id}")
    public ResponseEntity<Warehouse> findWarehouseById(@PathVariable int id) {
        Warehouse warehouse = warehouseService.findWarehouseById(id);
        return new ResponseEntity<Warehouse>(warehouse, HttpStatus.OK);
    }

    @PostMapping("/warehouse")
    public ResponseEntity<Warehouse> createWarehouse(@Valid @RequestBody Warehouse warehouse) {

        Warehouse newWarehouse = warehouseService.saveWarehouse(warehouse);
        return new ResponseEntity<Warehouse>(newWarehouse, HttpStatus.CREATED);

    }

}
