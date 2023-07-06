package com.skillstorm.warehaus.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "company_product")
public class CompanyProduct {
    
    @Id
    @Column(name = "companyProduct_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int companyProduct_id;

    @Column(name = "productCompany_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productCompany_id;
    

    public CompanyProduct() {

    }

    public CompanyProduct(int companyProduct_id, int productCompany_id) {
        this.companyProduct_id = companyProduct_id;
        this.productCompany_id = productCompany_id;
    }

    public int getCompanyProduct_id() {
        return companyProduct_id;
    }

    public void setCompanyProduct_id(int companyProduct_id) {
        this.companyProduct_id = companyProduct_id;
    }

    public int getProductCompany_id() {
        return productCompany_id;
    }

    public void setProductCompany_id(int productCompany_id) {
        this.productCompany_id = productCompany_id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + companyProduct_id;
        result = prime * result + productCompany_id;
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
        CompanyProduct other = (CompanyProduct) obj;
        if (companyProduct_id != other.companyProduct_id)
            return false;
        if (productCompany_id != other.productCompany_id)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "CompanyProduct [companyProduct_id=" + companyProduct_id + ", productCompany_id=" + productCompany_id
                + "]";
    }

}
