package com.skillstorm.warehaus.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

// warehouse model - connected to warehouses table in database
@Entity
@Table(name = "warehouses")
public class Warehouse {
    
    // warehouse primary key
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // warehouse name 
    @Column(name = "warehouse_name")
    private String warehouseName;

    // location of the warehouse
    @Column(name = "warehouse_location")
    private String warehouseLocation;

    @Column(name = "warehouse_current_capacity")
    @Value("0")
    private int currentCapacity;

    // inventory limit in the warehouse
    @Column(name = "warehouse_limit")
    private int warehouseLimit;

    public Warehouse() {
    }

    public Warehouse(int id, String warehouseName, String warehouseLocation, int currentCapacity, int warehouseLimit) {
        this.id = id;
        this.warehouseName = warehouseName;
        this.warehouseLocation = warehouseLocation;
        this.currentCapacity = currentCapacity;
        this.warehouseLimit = warehouseLimit;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWarehouseName() {
        return warehouseName;
    }

    public void setWarehouseName(String warehouseName) {
        this.warehouseName = warehouseName;
    }

    public String getWarehouseLocation() {
        return warehouseLocation;
    }

    public void setWarehouseLocation(String warehouseLocation) {
        this.warehouseLocation = warehouseLocation;
    }

    public int getCurrentCapacity() {
        return currentCapacity;
    }

    public void setCurrentCapacity(int currentCapacity) {
        this.currentCapacity = currentCapacity;
    }

    public int getWarehouseLimit() {
        return warehouseLimit;
    }

    public void setWarehouseLimit(int warehouseLimit) {
        this.warehouseLimit = warehouseLimit;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((warehouseName == null) ? 0 : warehouseName.hashCode());
        result = prime * result + ((warehouseLocation == null) ? 0 : warehouseLocation.hashCode());
        result = prime * result + currentCapacity;
        result = prime * result + warehouseLimit;
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
        Warehouse other = (Warehouse) obj;
        if (id != other.id)
            return false;
        if (warehouseName == null) {
            if (other.warehouseName != null)
                return false;
        } else if (!warehouseName.equals(other.warehouseName))
            return false;
        if (warehouseLocation == null) {
            if (other.warehouseLocation != null)
                return false;
        } else if (!warehouseLocation.equals(other.warehouseLocation))
            return false;
        if (currentCapacity != other.currentCapacity)
            return false;
        if (warehouseLimit != other.warehouseLimit)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Warehouse [id=" + id + ", warehouseName=" + warehouseName + ", warehouseLocation=" + warehouseLocation
                + ", currentCapacity=" + currentCapacity + ", warehouseLimit=" + warehouseLimit + "]";
    }

}
