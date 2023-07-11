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
									  CREATE OR REPLACE TRIGGER

CREATE OR REPLACE FUNCTION check_max_fnc()
  RETURNS trigger AS
$$
BEGIN
if 
(SELECT SUM (product_quantity) FROM inventories
	WHERE warehouses.id = NEW.warehouse_id) + NEW.product_quantity > (SELECT warehouse_limit FROM warehouses WHERE id = NEW.warehouse_id) 
then
RAISE NOTICE 'This would go over the warehouse limit!';
END
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER inventory_insert_trigger
  BEFORE INSERT
  ON inventories
  FOR EACH ROW
  EXECUTE PROCEDURE check_max_fnc();

--*********************

CREATE OR REPLACE FUNCTION warehouseProduct_insert_trigger_fnc2()
  RETURNS trigger AS
$$
BEGIN
    INSERT INTO warehouse_product ( product_id)
         VALUES(NEW.product_id);
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER warehouseProduct_insert_trigger2
  AFTER INSERT
  ON products
  FOR EACH ROW
  EXECUTE PROCEDURE warehouseProduct_insert_trigger_fnc2();
--**********************

SELECT * from warehouses;
SELECT * FROM products;
SELECT * FROM warehouse_product;