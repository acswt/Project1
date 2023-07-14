DROP TRIGGER update_current_capacity_trigger;
DROP FUNCTION IF EXISTS update_current_capacity_fnc();

--*********************

CREATE OR REPLACE FUNCTION update_current_capacity_fnc()
  RETURNS trigger AS
$$
BEGIN
    UPDATE warehouses
	SET warehouse_current_capacity = (SELECT SUM (product_quantity) FROM inventories)
	WHERE warehouses.id = NEW.warehouse_id;
	RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER update_current_capacity_trigger
  AFTER INSERT
  ON inventories
  FOR EACH ROW
  EXECUTE PROCEDURE update_current_capacity_fnc();
									  
--*********************

CREATE OR REPLACE FUNCTION update_current_capacity_fnc2()
  RETURNS trigger AS
$$
BEGIN
    UPDATE warehouses
	SET warehouse_current_capacity = (SELECT SUM (product_quantity) FROM inventories)
	WHERE warehouses.id = NEW.warehouse_id;
	RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER update_current_capacity_trigger2
  AFTER UPDATE
  ON inventories
  FOR EACH ROW
  EXECUTE PROCEDURE update_current_capacity_fnc2();
									  
--*********************
									  

CREATE OR REPLACE FUNCTION check_max_fnc()
  RETURNS trigger AS
$$
BEGIN
  IF (
    (SELECT SUM(product_quantity) FROM inventories WHERE inventories.warehouse_id = NEW.warehouse_id) + NEW.product_quantity >
    (SELECT warehouse_limit FROM warehouses WHERE warehouses.id = NEW.warehouse_id)
  ) THEN
    RAISE EXCEPTION 'This would go over the warehouse limit!';
  END IF;

  RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER inventory_insert_trigger
  BEFORE INSERT
  ON inventories
  FOR EACH ROW
  EXECUTE PROCEDURE check_max_fnc();
  
--**********************

CREATE OR REPLACE FUNCTION check_max_fnc2()
  RETURNS trigger AS
$$
BEGIN
  IF (
    (SELECT SUM(product_quantity) FROM inventories WHERE inventories.warehouse_id = NEW.warehouse_id) + NEW.product_quantity >
    (SELECT warehouse_limit FROM warehouses WHERE warehouses.id = NEW.warehouse_id)
  ) THEN
    RAISE EXCEPTION 'This would go over the warehouse limit!';
  END IF;

  RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER inventory_insert_trigger2
  BEFORE UPDATE
  ON inventories
  FOR EACH ROW
  EXECUTE PROCEDURE check_max_fnc2();
  
--**********************

SELECT * from warehouses;
SELECT * FROM products;
SELECT * FROM inventories;