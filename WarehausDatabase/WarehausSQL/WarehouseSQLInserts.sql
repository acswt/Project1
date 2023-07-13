INSERT INTO products
VALUES (1, 'BMW')

INSERT INTO products
VALUES (2, 'Scooter')

INSERT INTO products
VALUES (3, 'Shirt')

INSERT INTO warehouses
VALUES (4, 'Clothing Garage', 'Pittsburgh', 0, 10)

INSERT INTO warehouses
VALUES(7, 'Clothing Store', 'Cleveland', 0, 10)

INSERT INTO inventories
VALUES (1, 1, 4, 2);

INSERT INTO inventories
VALUES (3, 2, 4, 8);

INSERT INTO inventories
VALUES (3, 3, 4, 8);

SELECT * from inventories

SELECT * FROM products

SELECT * FROM warehouses

SELECT SUM (product_quantity)
FROM inventories 
WHERE warehouse_id = 1

(SELECT SUM (product_quantity) FROM inventories WHERE warehouse_id = 1)
