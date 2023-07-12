INSERT INTO products
VALUES (1, 'BMW')

INSERT INTO products
VALUES (2, 'Scooter')

INSERT INTO warehouses
VALUES (4, 'Clothing Garage', 'Pittsburgh', 0, 10)

INSERT INTO inventories
VALUES (1, 1, 4, 1000);

INSERT INTO inventories
VALUES (2, 1, 4, 4000);

SELECT * from inventories

SELECT * FROM products

SELECT * FROM warehouses

SELECT SUM (product_quantity)
FROM inventories 
WHERE warehouse_id = 1

(SELECT SUM (product_quantity) FROM inventories WHERE warehouse_id = 1)
