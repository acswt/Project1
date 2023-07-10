package com.skillstorm.warehaus.services;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skillstorm.warehaus.models.Inventory;
import com.skillstorm.warehaus.repositories.InventoryRepository;

@Service
public class InventoryService {
    
    @Autowired
    InventoryRepository inventoryRepository;

    public List<Inventory> findAllInventories() {
        
        return inventoryRepository.findAll();
    }

    public Inventory findInventoryById(int id) {

        Optional<Inventory> inventory = inventoryRepository.findById(id);

        if(inventory.isPresent()) {
            return inventory.get();
        }

        return null;

    }

        public Inventory saveInventory(@Valid Inventory inventory) {

        return inventoryRepository.save(inventory);

    }

        public Inventory updateInventory(@Valid Inventory inventory) {
        
        return inventoryRepository.save(inventory);

    }

        public void deleteInventory(Inventory inventory) {

            inventoryRepository.delete(inventory);

        }    

}
