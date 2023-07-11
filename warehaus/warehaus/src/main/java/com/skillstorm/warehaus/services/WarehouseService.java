package com.skillstorm.warehaus.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehaus.models.Warehouse;
import com.skillstorm.warehaus.repositories.WarehouseRepository;

// warehouse business logic
@Service
public class WarehouseService {
    
    @Autowired
    WarehouseRepository warehouseRepository;

    // return a list of warehouses from the database
    public List<Warehouse> findAllWarehouses() {
        return warehouseRepository.findAll();
    }

    // find a warehouse by id passed from front end 
    public Warehouse findWarehouseById(int id) {
        
        // if id passed from front end exists in the database, return the warehouse 
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);

        if(warehouse.isPresent()) {
            return warehouse.get();
        }

        return null;

    }

    // save a warehouse to the database
    public Warehouse saveWarehouse(@Valid Warehouse warehouse) {
        
        return warehouseRepository.save(warehouse);

    }

        // update a warehouse in the database
        public Warehouse updateWarehouse(@Valid Warehouse warehouse) {
        
        return warehouseRepository.save(warehouse);

    }

        // delete a warehouse in the database
        public void deleteWarehouse(Warehouse warehouse) {

            warehouseRepository.delete(warehouse);

        }


}
