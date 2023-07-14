package com.skillstorm.warehaus.models;

import java.io.Serializable;

import javax.persistence.Column;

public class InventoryPrimaryKey implements Serializable {
    
    @Column(name = "product_id")
    private int product_id;

    @Column(name = "warehouse_id")
    private int warehouse_id;

    public InventoryPrimaryKey() {
    }

    public InventoryPrimaryKey(int product_id, int warehouse_id) {
        this.product_id = product_id;
        this.warehouse_id = warehouse_id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public int getWarehouse_id() {
        return warehouse_id;
    }

    public void setWarehouse_id(int warehouse_id) {
        this.warehouse_id = warehouse_id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + product_id;
        result = prime * result + warehouse_id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        InventoryPrimaryKey other = (InventoryPrimaryKey) obj;
        if (product_id != other.product_id)
            return false;
        if (warehouse_id != other.warehouse_id)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "InventoryPrimaryKey [product_id=" + product_id + ", warehouse_id=" + warehouse_id + "]";
    }

    

}
