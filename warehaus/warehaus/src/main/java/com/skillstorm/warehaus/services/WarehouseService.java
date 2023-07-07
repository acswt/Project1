package com.skillstorm.warehaus.services;

import java.util.List;

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

}
