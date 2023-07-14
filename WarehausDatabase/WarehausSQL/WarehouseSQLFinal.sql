BEGIN TRANSACTION;

DROP TABLE IF EXISTS warehouses, products, inventories;

CREATE TABLE warehouses (
	id SERIAL,
	warehouse_name varchar(50) NOT NULL UNIQUE,
	warehouse_location varchar(100) NOT NULL,
	warehouse_current_capacity INT DEFAULT 0,
	warehouse_limit INT,
	CONSTRAINT PK_warehouse PRIMARY KEY (id)
);

CREATE TABLE products (
	id SERIAL,
	product_name varchar(50) NOT NULL UNIQUE,
	CONSTRAINT PK_product PRIMARY KEY (id)
);

CREATE TABLE inventories (
	id SERIAL,
	product_id INT,
	warehouse_id INT,
	product_quantity INT,
	CONSTRAINT PK_inventory PRIMARY KEY (id)
	
-- 	CONSTRAINT PK_inventory PRIMARY KEY (warehouse_id, product_id)
-- 	CONSTRAINT FK_product_id FOREIGN KEY (product_id) REFERENCES products(id),
-- 	CONSTRAINT FK_warehouse_id FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);


COMMIT TRANSACTION;
ROLLBACK;