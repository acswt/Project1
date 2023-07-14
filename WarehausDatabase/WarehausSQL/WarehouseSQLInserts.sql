INSERT INTO products
VALUES (1, 'BMW')

INSERT INTO products
VALUES (2, 'Scooter')

INSERT INTO products
VALUES (3, 'Shirt')

INSERT INTO warehouses
VALUES (1, 'Clothing Garage', 'Pittsburgh', 0, 10)

INSERT INTO warehouses
VALUES(2, 'Clothing Store', 'Cleveland', 0, 10)

INSERT INTO inventories
VALUES (1, 2, 1, 20);

INSERT INTO inventories
VALUES (2, 2, 2, 8);

INSERT INTO inventories
VALUES (2, 2, 2, 1);

SELECT * from inventories

SELECT * FROM products

SELECT * FROM warehouses

SELECT SUM (product_quantity)
FROM inventories 
WHERE warehouse_id = 1

(SELECT SUM (product_quantity) FROM inventories WHERE warehouse_id = 1)
