BEGIN TRANSACTION;

DROP TABLE IF EXISTS warehouses, products, inventories;

CREATE TABLE warehouses (
	id SERIAL,
	warehouse_name varchar(50) NOT NULL UNIQUE,
	warehouse_location varchar(100) NOT NULL,
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
	CONSTRAINT PK_inventory PRIMARY KEY (warehouse_id, product_id),
	CONSTRAINT FK_product_id FOREIGN KEY (product_id) REFERENCES products(id),
	CONSTRAINT FK_warehouse_id FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);

CREATE OR REPLACE FUNCTION check_max_fnc()
  RETURNS trigger AS
$$
BEGIN
if 
(SELECT SUM (product_quantity)
FROM inventories 
WHERE warehouse_id = NEW.warehouse_id + NEW.product_quantity > SELECT warehouse_limit
																  FROM warehouses WHERE id = NEW.warehouse_id 
then
RAISE EXCEPTION 'This would go over the warehouse limit!';
end if;
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER inventory_insert_trigger
  BEFORE INSERT
  ON inventories
  FOR EACH ROW
  EXECUTE PROCEDURE check_max_fnc();

COMMIT TRANSACTION;
ROLLBACK;