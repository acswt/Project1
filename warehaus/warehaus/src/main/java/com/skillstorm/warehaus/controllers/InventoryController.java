package com.skillstorm.warehaus.controllers;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.skillstorm.warehaus.models.Inventory;
import com.skillstorm.warehaus.services.InventoryService;

@RestController
@RequestMapping("/inventories")
@CrossOrigin(origins = "http://localhost:8080/inventories")
public class InventoryController {
    
    @Autowired
    InventoryService inventoryService;

    // get request for inventories
    @GetMapping
    public ResponseEntity<List<Inventory>> findAllInventories() {
        
        List<Inventory> inventories = inventoryService.findAllInventories();
        return new ResponseEntity<List<Inventory>>(inventories, HttpStatus.OK);
    }

    // get inventory by inventory id 
    @GetMapping("/inventory/{id}")
    public ResponseEntity<Inventory> findInventoryById(@PathVariable int id) {
        Inventory inventory = inventoryService.findInventoryById(id);
        return new ResponseEntity<Inventory>(inventory, HttpStatus.OK);

    }

    // create a new inventory
        @PostMapping("/inventory")
    public ResponseEntity<Inventory> createInventory(@Valid @RequestBody Inventory inventory) {

        Inventory newInventory = inventoryService.saveInventory(inventory);
        return new ResponseEntity<Inventory>(newInventory, HttpStatus.CREATED);

    }

    // update an inventory 
    @PutMapping("/inventory")
    public ResponseEntity<Inventory> updateInventory(@RequestBody Inventory inventory) {

        Inventory newInventory = inventoryService.saveInventory(inventory);
        return new ResponseEntity<Inventory>(newInventory, HttpStatus.OK);

    }

    // delete an inventory
    @DeleteMapping("/inventory/{id}")
    public ResponseEntity<Inventory> deleteInventory(@RequestBody Inventory inventory) {

        inventoryService.deleteInventory(inventory);
        return ResponseEntity.noContent().build();

    }

}
