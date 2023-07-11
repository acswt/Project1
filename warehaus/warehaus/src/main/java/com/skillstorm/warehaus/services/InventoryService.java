package com.skillstorm.warehaus.services;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skillstorm.warehaus.models.Inventory;
import com.skillstorm.warehaus.repositories.InventoryRepository;

// Inventory business logic
@Service
public class InventoryService {
    
    @Autowired
    InventoryRepository inventoryRepository;

    // call repo and return a list of all inventories from database
    public List<Inventory> findAllInventories() {
        
        return inventoryRepository.findAll();
    }

    // find an inventory in the database by id
    public Inventory findInventoryById(int id) {

        // if id passed from front end exists in database, return the inventory
        Optional<Inventory> inventory = inventoryRepository.findById(id);

        if(inventory.isPresent()) {
            return inventory.get();
        }

        return null;

    }

        // save inventory to database
        public Inventory saveInventory(@Valid Inventory inventory) {

        

        return inventoryRepository.save(inventory);

    }

        // update inventory in database
        public Inventory updateInventory(@Valid Inventory inventory) {
        
        return inventoryRepository.save(inventory);

    }

        // delete an inventory in the database
        public void deleteInventory(Inventory inventory) {

            inventoryRepository.delete(inventory);

        }    

}
