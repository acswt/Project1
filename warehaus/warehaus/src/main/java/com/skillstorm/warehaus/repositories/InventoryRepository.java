package com.skillstorm.warehaus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.warehaus.models.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    
}
