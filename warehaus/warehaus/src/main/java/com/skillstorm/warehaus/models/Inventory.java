package com.skillstorm.warehaus.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

    // foreign key from products table primary key ID
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product productId;

    // foreign key from warehouses table primary key ID
    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouseId;

    // quantity of product inserted into the inventory
    @Column(name = "product_quantity")
    private int productQuantity;

    public Inventory() {
    }

    public Inventory(int id, Product productId, Warehouse warehouseId, int productQuantity) {
        this.id = id;
        this.productId = productId;
        this.warehouseId = warehouseId;
        this.productQuantity = productQuantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProductId() {
        return productId;
    }

    public void setProductId(Product productId) {
        this.productId = productId;
    }

    public Warehouse getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(Warehouse warehouseId) {
        this.warehouseId = warehouseId;
    }

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((productId == null) ? 0 : productId.hashCode());
        result = prime * result + ((warehouseId == null) ? 0 : warehouseId.hashCode());
        result = prime * result + productQuantity;
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
        if (productId == null) {
            if (other.productId != null)
                return false;
        } else if (!productId.equals(other.productId))
            return false;
        if (warehouseId == null) {
            if (other.warehouseId != null)
                return false;
        } else if (!warehouseId.equals(other.warehouseId))
            return false;
        if (productQuantity != other.productQuantity)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Inventory [id=" + id + ", productId=" + productId + ", warehouseId=" + warehouseId
                + ", productQuantity=" + productQuantity + "]";
    }

}
