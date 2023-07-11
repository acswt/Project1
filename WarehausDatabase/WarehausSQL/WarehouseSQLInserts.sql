INSERT INTO products
VALUES (1, 'BMW')

INSERT INTO products
VALUES (2, 'Scooter')

INSERT INTO warehouses
VALUES (1, 'Car Garage', 'Pittsburgh', null, )

INSERT INTO inventories
VALUES (2, 2, 1, 8);

INSERT INTO inventories
VALUES (10, 5, 2, 1000);

SELECT * from inventories

SELECT * FROM products

SELECT * FROM warehouses

SELECT SUM (product_quantity)
FROM inventories 
WHERE warehouse_id = 1

(SELECT SUM (product_quantity) FROM inventories WHERE warehouse_id = 1)
