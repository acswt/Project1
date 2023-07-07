package com.skillstorm.warehaus.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.warehaus.models.Warehouse;
import com.skillstorm.warehaus.repositories.WarehouseRepository;

@Service
public class WarehouseService {
    
    @Autowired
    WarehouseRepository warehouseRepository;

    public List<Warehouse> findAllWarehouses() {
        return warehouseRepository.findAll();
    }

    public Warehouse findWarehouseById(int id) {
        
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);

        if(warehouse.isPresent()) {
            return warehouse.get();
        }

        return null;

    }

    public Warehouse saveWarehouse(@Valid Warehouse warehouse) {
        
        return warehouseRepository.save(warehouse);

    }

}
