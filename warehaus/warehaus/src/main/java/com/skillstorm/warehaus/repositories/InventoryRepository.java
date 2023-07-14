package com.skillstorm.warehaus.repositories;

// import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.skillstorm.warehaus.models.Inventory;
// import com.skillstorm.warehaus.models.InventoryPrimaryKey;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {

    // Optional<Inventory> findAllInventories(InventoryPrimaryKey inventoryPrimaryKey);
    
}
