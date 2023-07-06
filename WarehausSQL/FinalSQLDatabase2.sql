BEGIN TRANSACTION;

DROP TABLE IF EXISTS warehouses, products, companies, warehouse_product, company_product;
DROP SEQUENCE IF EXISTS seq_warehouse_id, seq_product_id, seq_company_id;

CREATE SEQUENCE seq_warehouse_id
INCREMENT BY 1
start with 2001
NO MAXVALUE

CREATE TABLE warehouses (
	warehouse_id INT NOT NULL DEFAULT nextval('seq_warehouse_id'),
	warehouse_name varchar(50) NOT NULL UNIQUE,
	warehouse_location varchar(100) NOT NULL,
	CONSTRAINT PK_warehouse PRIMARY KEY (warehouse_id)
);

CREATE SEQUENCE seq_product_id
INCREMENT BY 1
start with 3001
NO MAXVALUE

CREATE TABLE products (
	product_id INT NOT NULL DEFAULT nextval('seq_product_id'),
	product_name varchar(50) NOT NULL UNIQUE,
	CONSTRAINT PK_product PRIMARY KEY (product_id)
);

CREATE SEQUENCE seq_company_id
INCREMENT BY 1
start with 4001
NO MAXVALUE

CREATE TABLE companies (
	company_id INT NOT NULL DEFAULT nextval('seq_company_id'),
	company_name varchar(50) NOT NULL UNIQUE,
	CONSTRAINT PK_company PRIMARY KEY (company_id)
);

CREATE TABLE warehouse_product (
	warehouseInventory_id SERIAL,
	product_id SERIAL,
	warehouse_id SERIAL,
	CONSTRAINT PK_warehouseInventoryId PRIMARY KEY (warehouseInventory_id),
	CONSTRAINT FK_warehouseId FOREIGN KEY (product_id) REFERENCES warehouses(warehouse_id),
	CONSTRAINT FK_productId FOREIGN KEY (warehouse_id) REFERENCES products(product_id)
);

CREATE TABLE company_product (
	companyInventory_id SERIAL,
	product_id SERIAL,
	company_id SERIAL,
	CONSTRAINT PK_companyInventoryId PRIMARY KEY (companyInventory_id),
	CONSTRAINT FK_companyId FOREIGN KEY (product_id) REFERENCES companies(company_id),
	CONSTRAINT FK_productId FOREIGN KEY (company_id) REFERENCES products(product_id)
);

COMMIT TRANSACTION;
ROLLBACK;