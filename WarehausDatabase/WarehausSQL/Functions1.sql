DROP TRIGGER IF EXISTS warehouseProduct_insert_trigger;
DROP FUNCTION IF EXISTS warehouseProduct_insert_trigger_fnc();

--*********************

CREATE OR REPLACE FUNCTION warehouseProduct_insert_trigger_fnc()
  RETURNS trigger AS
$$
BEGIN
    INSERT INTO warehouse_product ( warehouse_id)
         VALUES(NEW.warehouse_id);
RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER warehouseProduct_insert_trigger
  AFTER INSERT
  ON warehouses
  FOR EACH ROW
  EXECUTE PROCEDURE warehouseProduct_insert_trigger_fnc();
--**********************

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

INSERT INTO warehouses
VALUES (2001, 'Car Shop', 'Pittsburgh')

INSERT INTO warehouses
VALUES (2002, 'Clothing Store', 'Pittsburgh')

INSERT INTO products
VALUES (3001, 'shirt')

SELECT * from warehouses;
SELECT * FROM products;
SELECT * FROM warehouse_product;