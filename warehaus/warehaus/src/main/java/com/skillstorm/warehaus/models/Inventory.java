package com.skillstorm.warehaus.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

// inventory model - connected to "inventories" table
@Entity
@Table(name = "inventories")
public class Inventory {
    
    // primary key for inventory (composite key made up of product_id and warehouse_id)
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // @Embedded
    // private InventoryPrimaryKey inventoryPrimaryKey;

    // // foreign key from products table primary key ID
    // @ManyToOne
    // @JoinColumn(name = "product_id")
    // private Product product_id;

    @Column
    private int product_id;

    // // foreign key from warehouses table primary key ID
    // @ManyToOne
    // @JoinColumn(name = "warehouse_id")
    // private Warehouse warehouse_id;

    @Column
    private int warehouse_id;

    // quantity of product inserted into the inventory
    @Column(name = "product_quantity")
    private int product_quantity;

    public Inventory() {
    }

    public Inventory(int id, int product_id, int warehouse_id, int product_quantity) {
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

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + product_id;
        result = prime * result + warehouse_id;
        result = prime * result + product_quantity;
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
        Inventory other = (Inventory) obj;
        if (id != other.id)
            return false;
        if (product_id != other.product_id)
            return false;
        if (warehouse_id != other.warehouse_id)
            return false;
        if (product_quantity != other.product_quantity)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Inventory [id=" + id + ", product_id=" + product_id + ", warehouse_id=" + warehouse_id
                + ", product_quantity=" + product_quantity + "]";
    }


}

    // public Inventory(int id, Product product_id, Warehouse warehouse_id, int product_quantity) {
    //     this.id = id;
    //     this.product_id = product_id;
    //     this.warehouse_id = warehouse_id;
    //     this.product_quantity = product_quantity;
    // }

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public Product getProduct_id() {
    //     return product_id;
    // }

    // public void setProduct_id(Product product_id) {
    //     this.product_id = product_id;
    // }

    // public Warehouse getWarehouse_id() {
    //     return warehouse_id;
    // }

    // public void setWarehouse_id(Warehouse warehouse_id) {
    //     this.warehouse_id = warehouse_id;
    // }

    // public int getProduct_quantity() {
    //     return product_quantity;
    // }

    // public void setProduct_quantity(int product_quantity) {
    //     this.product_quantity = product_quantity;
    // }

    // @Override
    // public int hashCode() {
    //     final int prime = 31;
    //     int result = 1;
    //     result = prime * result + id;
    //     result = prime * result + ((product_id == null) ? 0 : product_id.hashCode());
    //     result = prime * result + ((warehouse_id == null) ? 0 : warehouse_id.hashCode());
    //     result = prime * result + product_quantity;
    //     return result;
    // }

    // @Override
    // public boolean equals(Object obj) {
    //     if (this == obj)
    //         return true;
    //     if (obj == null)
    //         return false;
    //     if (getClass() != obj.getClass())
    //         return false;
    //     Inventory other = (Inventory) obj;
    //     if (id != other.id)
    //         return false;
    //     if (product_id == null) {
    //         if (other.product_id != null)
    //             return false;
    //     } else if (!product_id.equals(other.product_id))
    //         return false;
    //     if (warehouse_id == null) {
    //         if (other.warehouse_id != null)
    //             return false;
    //     } else if (!warehouse_id.equals(other.warehouse_id))
    //         return false;
    //     if (product_quantity != other.product_quantity)
    //         return false;
    //     return true;
    // }

    // @Override
    // public String toString() {
    //     return "Inventory [id=" + id + ", product_id=" + product_id + ", warehouse_id=" + warehouse_id
    //             + ", product_quantity=" + product_quantity + "]";
    // }