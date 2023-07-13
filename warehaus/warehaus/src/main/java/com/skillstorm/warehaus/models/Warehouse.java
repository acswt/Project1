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
    private String warehouse_name;

    // location of the warehouse
    @Column(name = "warehouse_location")
    private String warehouse_location;

    @Column(name = "warehouse_current_capacity")
    @Value("0")
    private int warehouse_current_capacity;

    // inventory limit in the warehouse
    @Column(name = "warehouse_limit")
    private int warehouse_limit;

    public Warehouse() {
    }

    public Warehouse(int id, String warehouse_name, String warehouse_location, int warehouse_current_capacity,
            int warehouse_limit) {
        this.id = id;
        this.warehouse_name = warehouse_name;
        this.warehouse_location = warehouse_location;
        this.warehouse_current_capacity = warehouse_current_capacity;
        this.warehouse_limit = warehouse_limit;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWarehouse_name() {
        return warehouse_name;
    }

    public void setWarehouse_name(String warehouse_name) {
        this.warehouse_name = warehouse_name;
    }

    public String getWarehouse_location() {
        return warehouse_location;
    }

    public void setWarehouse_location(String warehouse_location) {
        this.warehouse_location = warehouse_location;
    }

    public int getWarehouse_current_capacity() {
        return warehouse_current_capacity;
    }

    public void setWarehouse_current_capacity(int warehouse_current_capacity) {
        this.warehouse_current_capacity = warehouse_current_capacity;
    }

    public int getWarehouse_limit() {
        return warehouse_limit;
    }

    public void setWarehouse_limit(int warehouse_limit) {
        this.warehouse_limit = warehouse_limit;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((warehouse_name == null) ? 0 : warehouse_name.hashCode());
        result = prime * result + ((warehouse_location == null) ? 0 : warehouse_location.hashCode());
        result = prime * result + warehouse_current_capacity;
        result = prime * result + warehouse_limit;
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
        if (warehouse_name == null) {
            if (other.warehouse_name != null)
                return false;
        } else if (!warehouse_name.equals(other.warehouse_name))
            return false;
        if (warehouse_location == null) {
            if (other.warehouse_location != null)
                return false;
        } else if (!warehouse_location.equals(other.warehouse_location))
            return false;
        if (warehouse_current_capacity != other.warehouse_current_capacity)
            return false;
        if (warehouse_limit != other.warehouse_limit)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Warehouse [id=" + id + ", warehouse_name=" + warehouse_name + ", warehouse_location="
                + warehouse_location + ", warehouse_current_capacity=" + warehouse_current_capacity
                + ", warehouse_limit=" + warehouse_limit + "]";
    }

}
