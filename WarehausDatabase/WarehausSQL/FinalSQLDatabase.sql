BEGIN TRANSACTION;

DROP TABLE IF EXISTS warehouses, products, companies, warehouse_product, company_product;

CREATE TABLE warehouses (
	warehouse_id SERIAL,
	warehouse_name varchar(50) NOT NULL UNIQUE,
	location varchar(100) NOT NULL,
	CONSTRAINT PK_warehouse PRIMARY KEY (warehouse_id)
);

CREATE TABLE products (
	product_id SERIAL,
	product_name varchar(50) NOT NULL UNIQUE,
	CONSTRAINT PK_product PRIMARY KEY (product_id)
);

CREATE TABLE companies (
	company_id SERIAL,
	company_name varchar(50) NOT NULL UNIQUE,
	CONSTRAINT PK_company PRIMARY KEY (company_id)
);

CREATE TABLE warehouse_product (
	warehouse_id SERIAL,
	product_id SERIAL,
	CONSTRAINT FK_warehouseId FOREIGN KEY (warehouse_id) REFERENCES warehouses(warehouse_id),
	CONSTRAINT FK_productId FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE company_product (
	company_id SERIAL,
	product_id SERIAL,
	CONSTRAINT FK_companyId FOREIGN KEY (company_id) REFERENCES companies(company_id),
	CONSTRAINT FK_productId FOREIGN KEY (product_id) REFERENCES products(product_id)
);

COMMIT TRANSACTION;