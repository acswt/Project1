BEGIN TRANSACTION;

DROP TABLE IF EXISTS warehouses, products, companies, inventories;

CREATE TABLE warehouses (
	id SERIAL,
	warehouse_name varchar(50) NOT NULL UNIQUE,
	warehouse_location varchar(100) NOT NULL,
	warehouse_limit INT,
-- 	CONSTRAINT max_limit CHECK (warehouse_limit <= 10),
	CONSTRAINT PK_warehouse PRIMARY KEY (id)
);

CREATE TABLE products (
	id SERIAL,
	product_name varchar(50) NOT NULL UNIQUE,
	quantity INT,
	CONSTRAINT max_quantity CHECK (quantity <= 10),
	CONSTRAINT PK_product PRIMARY KEY (id)
);

CREATE TABLE inventories (
	product_id INT,
	warehouse_id INT,
	product_quantity INT,
	CONSTRAINT PK_inventory PRIMARY KEY (warehouse_id, product_id),
	CONSTRAINT FK_product_id FOREIGN KEY (product_id) REFERENCES products(id),
	CONSTRAINT FK_warehouse_id FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);

INSERT INTO warehouses
VALUES (1, 'Car warehouse', 'Pittsburgh', 10)

SELECT * FROM warehouses

COMMIT TRANSACTION;
ROLLBACK;