package com.skillstorm.warehaus.DTOs;

import com.skillstorm.warehaus.models.Product;
import com.skillstorm.warehaus.models.Warehouse;

public class InventoryDTO {
    private int id;
    private int product_id;
    private int warehouse_id;
    private int product_quantity;
    
    public InventoryDTO() {
    }

    public InventoryDTO(int id, int product_id, int warehouse_id, int product_quantity) {
        this.id = id;
        this.product_id = product_id;
        this.warehouse_id = warehouse_id;
        this.product_quantity = product_quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Product product) {
        this.product_id = product.getId();
    }

    public int getWarehouse_id() {
        return warehouse_id;
    }

    public void setWarehouse_id(int warehouse_id) {
        this.warehouse_id = warehouse_id;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }

    public void setProduct_quantity(int product_quantity) {
        this.product_quantity = product_quantity;
    }

    public void getWarehouse_id(Warehouse warehouse_id2) {
    }

    

    // Constructors, getters, and setters
}
