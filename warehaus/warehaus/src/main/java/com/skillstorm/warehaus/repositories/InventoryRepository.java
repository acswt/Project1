package com.skillstorm.warehaus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.skillstorm.warehaus.models.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    
}
