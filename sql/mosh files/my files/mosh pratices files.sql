-- *************************************************** key words *********************************************************************

-- 'Order for to get result'

-- USE 
-- SELECT
-- FROM
-- WHERE
-- GROUP BY
-- HAVING
-- ORDER
-- LIMIT

-- 'TIPS'

-- to get the list databases present in machine
-- {SHOW DATABASES;}
-- to create a new schema
-- create schema sql_intro;

-- to select row first select colum then table  [ SO WE TYPE SELECT THEN FROM ]
-- to get the table use databases name / select all or name of column/ from "table name"
-- [where] is like a filter
-- ambigous it will appare in action output it means condition(join) or column(select) are match two or more places (sql is confused to take which value as there 2 quantity with same name)

-- auto incerment must be apply to primary key 

-- [order by] sort the column in alphabtical order
-- DESC is used for sort in desending order

-- [where] to get column on given condition
-- select then 'column name' [as] then ' new name'  for change the name of column
-- [distinct] is used to get the row value unquie not repeating values 
-- [AND, OR , NOT ] are the logic operators 
-- [IN] is combination of OR logic operator{where column IN (condition, condition)} IT RESULT CONDITION IS PRESENTS. IT CAN USED IN WHICH QURREY RETURN MORE THAN ONE RESULT
-- [BETWEEN] is filter that returned the value between two condition

-- [REGEXP] regular expression it is set of symbol
-- ^ it is for beginning
-- $ it is for end
-- | it is for OR operator
-- [abcd]e for to find ae be ce de in table
-- [a-h]e for a range

-- sometime column entry of row is null
-- [IS NULL] is used to filter the result

-- [LIMITS] give the boundary condition to data set {LIMITS 3,  or   LIMITS 6, 3}  6 is start condition 3 it is increment | it will give result 7 8 9

-- [INNER JOIN] it use for to connect join 2 tables form same schemas
-- *************************************************** NEW SESSION *********************************************************************

-- 													SELECT Statement

USE sql_store;
-- it is used for to select the objects

SELECT *
FROM customers
WHERE customer_id = 1
-- it is used as to get the row from the table
ORDER BY first_name;
-- in alphabitical order

-- ***************************************************

SELECT
	last_name,
    first_name,
    points,
    (points+ 10) *100 AS "discount factor"
    -- it is for rename the colum
FROM customers;

-- ***************************************************

SELECT DISTINCT state
FROM customers;
-- it will return unqiue value of state

-- ***************************************************

-- 											***********		EXCERISE	***********

USE sql_inventory;

SELECT 
	product_id,
    unit_price,
    (unit_price * 1.1 ) AS"new_price"
FROM products;


-- *************************************************** NEW SESSION ************************************************************************

--														WHERE CLAUSE
-- it is used for to get result from condition 

USE sql_store;
SELECT *
FROM customers
WHERE state = "VA";
-- WHERE birth_date > '1990-01-01'

--  										***********		EXCERISE	***********

SELECT *
FROM orders
WHERE order_date >= " 2018-01-01"
ORDER BY order_date;

-- *************************************************** NEW SESSION ************************************************************************

--												 AND, OR , NOT OPERATORS

SELECT *
FROM customers
WHERE birth_date >= '1990-01-01' AND points > 1000;
-- it is used to apply two conditions

-- ***************************************************

USE sql_invoicing;
SELECT *
FROM clients;

SELECT *
FROM clients
WHERE city = "Waco" OR state = "Ny";

-- it is used for to enither one condition from above both condition

SELECT *
FROM clients
WHERE NOT city = "Waco";
-- it only inverse the condition or opposite condition
-- (condition [and] condition) [or] condition

--  										***********		EXCERISE	***********

USE sql_store;
SELECT *
FROM order_items
WHERE order_id = 6 AND (quantity * unit_price) >= 25;

-- *************************************************** NEW SESSION ************************************************************************

--														IN operators 

SELECT *
FROM customers
WHERE state IN ('VA' , 'FL', 'GA');

-- it is filter in which it returns only where state is VA, FL, GA 

--  										***********		EXCERISE	***********

SELECT *
FROM products
WHERE quantity_in_stock IN (49,38,72);

-- *************************************************** NEW SESSION ************************************************************************

--														BETWEEN OPERATOR
 
SELECT *
FROM customers
-- WHERE points >= 1000 AND points <= 3000 its same as below
WHERE points BETWEEN 1000 AND 3000;

--  										***********		EXCERISE	***********

SELECT *
FROM customers
WHERE birth_date BETWEEN "1990-1-1" AND "2000-1-1";

-- *************************************************** NEW SESSION ************************************************************************

--													LIKE OPERATOR

SELECT *
FROM customers
WHERE last_name LIKE '%y';
-- %y is for to give the result end with y
-- y% is for to give the result start with y
-- %Y% is for give to find y anywhere in sentence
-- _____y is for to give the result 5 characters end with y

 --  										***********		EXCERISE	***********

SELECT *
FROM customers
WHERE address LIKE '%TRAIL%' OR
	  address LIKE '%AVENUE%';

SELECT *
FROM customers
WHERE phone LIKE '%9';

SELECT *
FROM customers 
WHERE phone NOT LIKE '%9';

-- *************************************************** NEW SESSION ************************************************************************

-- 													REGEXP OPERATOR

SELECT *
FROM customers
WHERE last_name REGEXP 'e';
-- it will give result in which e is present

SELECT *
FROM customers
WHERE last_name REGEXP '^b';
-- it will give expression start with b

SELECT *
FROM customers
WHERE last_name REGEXP 'y$';
-- it will give expression end with y

SELECT *
FROM customers
WHERE last_name REGEXP '[ADS]E';
-- it will give ae de se

SELECT *
FROM customers
WHERE last_name REGEXP '[A-S]E';
-- it will range a to s with e example ae be de and so on

SELECT *
FROM customers
WHERE last_name REGEXP 'field|mac|rose';
-- ^field|mac|rose it will give condition start 
-- | is like OR operator it will give condition 1 or condition 2 or condition 3

 --  										***********		EXCERISE	***********

SELECT *
FROM customers
WHERE first_name REGEXP 'ELKA|AMBUR';

SELECT *
FROM customers
WHERE last_name REGEXP 'EY$|ON$';

SELECT *
FROM customers 
WHERE last_name REGEXP '^MY|SE'
ORDER BY points;

SELECT *
FROM customers
WHERE last_name REGEXP 'B[RU]';

-- *************************************************** NEW SESSION ************************************************************************

-- 													NULL OPERATOR

SELECT *
FROM customers
WHERE phone IS NULL;
-- IS NULL will return the result where value is null

SELECT *
FROM customers
WHERE phone IS NOT NULL;
-- it is opposite of above

--  										***********		EXCERISE	***********

SELECT *
FROM orders
WHERE shipped_date IS NULL;

SELECT *
FROM orders
WHERE shipped_date IS NOT NULL;

-- *************************************************** NEW SESSION ************************************************************************

--														ORDER BY

SELECT *
FROM customers
ORDER BY first_name DESC;
-- DESC is used for sort in desending order

--  										***********		EXCERISE	***********

SELECT *, quantity *unit_price AS total_price
FROM order_items
WHERE order_id = 2
ORDER BY total_price DESC;
-- AS is used to add temporpary add column

-- *************************************************** NEW SESSION ************************************************************************

--														 LIMIT OPERATOR 
USE sql_store;
SELECT *
FROM customers
-- LIMIT 3
LIMIT 6 , 3;
-- LIMIT it will give boundary condition 6 will given start condition 3 is increment 7, 8 , 9

--  										***********		EXCERISE	***********

USE sql_store;
SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3;

-- *************************************************** NEW SESSION ************************************************************************

--													INNER JOINTS CONCEPT

-- it explicit join method
-- it will 2 join to table in same schemas

SELECT orders.customer_id, order_id, first_name, last_name
FROM orders
INNER JOIN customers
	ON orders.customer_id = customers.customer_id
ORDER BY first_name
LIMIT 3;

SELECT order_id, o.customer_id, first_name, last_name, points
FROM orders o
INNER JOIN customers c
	ON o.customer_id = c.customer_id
WHERE points >= 500
ORDER BY order_id;

--  										***********		EXCERISE	***********

SELECT order_id, o.product_id , name, (quantity*p.unit_price) AS Total_Price
FROM order_items o
INNER JOIN products p 
	ON o.product_id = p.product_id
ORDER BY order_id;

USE sql_store;
SELECT order_id, o.product_id, name,  (o.unit_price*o.quantity) AS Total_price
FROM order_items o
INNER JOIN products p
	ON p.product_id = o.product_id
ORDER BY name;

-- *************************************************** NEW SESSION ************************************************************************

--												JOINING ACROSS DATABASES

SELECT *
FROM order_items o
INNER JOIN sql_inventory.products p
	ON o.product_id = p.product_id;
    
    
-- *************************************************** NEW SESSION ************************************************************************

-- 														SELF JOIN

USE sql_hr;
SELECT e.employee_id, e.first_name, h.first_name AS Manager
FROM employees e
INNER JOIN employees h
	ON 	e.reports_to = h.employee_id;
    
-- *************************************************** NEW SESSION ************************************************************************

--												JOINING MULTIPLE TABLE

USE sql_store;

SELECT 
	o.order_id,
    order_date,
    c.first_name,
	c.last_name,
    s.name AS status
FROM orders o
JOIN customers c
	ON c.customer_id = o.customer_id
JOIN order_statuses s
	ON o.status = s.order_status_id
ORDER BY order_date DESC;

--  										***********		EXCERISE	***********

USE sql_invoicing;
SELECT
	p.payment_id,
	c.name,
    p.date,
    p.amount,
    m.name
FROM payments p
INNER JOIN clients c
	ON p.client_id = c.client_id
INNER JOIN payment_methods m
	ON m.payment_method_id = p.payment_method
ORDER BY p.date DESC;

-- *************************************************** NEW SESSION ************************************************************************

--													IMPLICIT JOIN METHOD
-- it is same as inner join but typing method is different
-- but in actual use only explicit join method

SELECT *
FROM customers c, orders o
WHERE c.customer_id = o.customer_id;

-- *************************************************** NEW SESSION ************************************************************************

--													   OUTER JOIN

-- outer join is to join table row even if the ON condition doesn't match
-- LEFT OUTER JOIN means sql will iterate from customers to order
-- RIGHT OUTER JOINN means sql will iterate from order to customers

USE sql_store;

SELECT
	c.customer_id,
	c.first_name,
    c.last_name,
    o.order_id
FROM customers c
LEFT OUTER JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id;

--  										***********		EXCERISE	***********

SELECT p.product_id,
	p.name,
	o.quantity
FROM order_items o
RIGHT OUTER JOIN products p
	ON o.product_id = p.product_id
ORDER BY p.product_id;

-- *************************************************** NEW SESSION ************************************************************************

--										OUTER JOIN FOR MULTIPLE TABLE

SELECT 
	c.customer_id,
    c.first_name,
    c.last_name,
    o.order_id,
    s.name AS shipper_name
FROM customers c 
LEFT OUTER JOIN orders o
	ON c.customer_id = o.customer_id
LEFT OUTER JOIN shippers s
	ON o.shipper_id = s.shipper_id
ORDER BY c.customer_id
LIMIT 5;

--  										***********		EXCERISE	***********

SELECT 
	o.order_date,
    o.order_id,
    c.first_name,
    c.last_name,
    s.name AS shipper_name,
    os.name AS status
FROM orders o
LEFT OUTER JOIN shippers s
	ON o.shipper_id = s.shipper_id
LEFT OUTER JOIN order_statuses os
	ON o.status = os.order_status_id
LEFT OUTER JOIN customers c
	ON o.customer_id = c.customer_id
ORDER BY os.name;

-- *************************************************** NEW SESSION ************************************************************************

--											   		 SELF OUTER JOIN
USE sql_hr;
SELECT 
	e.employee_id,
    e.first_name,
    m.first_name
FROM employees e
LEFT OUTER JOIN employees m
		ON e.reports_to = m.employee_id;
        
-- *************************************************** NEW SESSION ************************************************************************

--													THE USING CLAUSE

USE sql_store;
SELECT 
	c.customer_id,
    c.first_name,
    c.last_name,
    o.order_id
FROM orders o
RIGHT OUTER JOIN customers c
	ON c.customer_id = o.customer_id;
    
-- in above example c.customer_id = o.customer_id is longer

SELECT 
	c.customer_id,
    c.first_name,
    c.last_name,
    o.order_id,
    s.name AS shipper_name
FROM orders o
RIGHT OUTER JOIN customers c
	USING (customer_id)
LEFT OUTER JOIN shippers s
	USING (shipper_id);

-- is same as above

--  										***********		EXCERISE	***********

USE sql_invoicing;
SELECT 
	i.invoice_id,
    i.due_date,
    i.payment_date,
    c.name AS client_name,
    pm.name AS payment_method,
    p.amount
FROM invoices i
JOIN clients c
	USING (client_id)
JOIN payments p
	USING (invoice_id)
LEFT JOIN payment_methods pm
	 ON pm.payment_method_id = p.payment_id;
-- ABOVE CODE IS WORNG

-- *************************************************** NEW SESSION ************************************************************************

--													NATURAL JOIN

-- is same as inner and outer join but in above join must have to give join condition.
-- but in natural join we have no need to give join condition.
-- sql will automatically assumed the condition or it will match the column
-- However it will give unexpected result. So, we must not use it

SELECT *
FROM clients
NATURAL JOIN invoices;

-- *************************************************** NEW SESSION ************************************************************************

--					    								CROSS JOIN

-- is join in which it will give all possible combination of row value
-- it doesn't have more use
USE sql_store;

-- explicit method
SELECT *
FROM customers c
CROSS JOIN products p;


-- implicit method
SELECT
	c.customer_id,
    c.first_name
FROM customers c , products p
ORDER BY customer_id;

--  										***********		EXCERISE	***********

-- implicit syntax
SELECT *
FROM shippers s, products p
ORDER BY product_id;

-- explicit syntax
SELECT *
FROM shippers s
CROSS JOIN products
ORDER BY  shipper_id;

-- *************************************************** NEW SESSION ************************************************************************

--														UNIONS

-- Unions is like it joins 2 qurrey
-- but in select command code of column must same in both qurrey
SELECT
	order_id,
    order_date,
    'Active' AS status
FROM orders
WHERE order_date >= '2019-01-01'
UNION
SELECT
	order_id,
    order_date,
	'Archived' AS status
FROM orders
WHERE order_date <= ' 2019-01-01';

--  										***********		EXCERISE	***********

-- 2000< bronze <3000 silver 3000> gold

SELECT 
	customer_id,
    first_name,
    points,
    "Bronze" AS type
FROM customers
WHERE points <= 2000
UNION
SELECT 
	customer_id,
    first_name,
    points,
    "Silver" AS type
FROM customers
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT 
	customer_id,
    first_name,
    points,
    "Gold" AS type
FROM customers
WHERE points >= 3000
ORDER BY first_name;

-- *************************************************** NEW SESSION ************************************************************************

-- 													COLUMN ATTRIBUTES

--  pimary key (PK) it is uniquely identify each record 
-- int(11) is for interger value 11 means it will allow only 11 interger
-- varchar(50) it is for alphabalt only upto 50
-- char (50) it means if we fill 10 char then sql will add remaining values
-- default/expression is a selection it will add readymate values

-- *************************************************** NEW SESSION ************************************************************************

--												INSERTING A SINGLE ROW

INSERT INTO customers
VALUES (
	DEFAULT,
    'John',
    'Simth',
    '1990-01-01',
    NULL,
    'Laxmi Nagar lane no .1 ',
    'Pune',
    'MH',
    DEFAULT);
    
-- it no need to add default or null fuction

SELECT *
FROM customers;

-- another method is if you want with different sequence

USE sql_store;
INSERT INTO customers (
	first_name,
    last_name,
    address,
    city,
    state
    )
VALUES (
	'Kunal',
    'Gaikwad',
    'laxmi nagar lane no. 2',
    'Pune',
    'MH'
    );
    
-- *************************************************** NEW SESSION ************************************************************************

--												TO ADD MULTIPLE TABLES

-- but do not realy on auto increment it can be result worng result

INSERT INTO shippers (
	name
    )
VALUES ('Shipper 1'),
	('Shipper 2 '),
    ('Shipper 3');
    
--  										***********		EXCERISE	***********

INSERT INTO products(
	name,
    quantity_in_stock,
    unit_price 
    )
VALUES 
	('Dry fruits', 25 , 30.25),
	('Dry fruits', 25 , 30.25),
	('Dry fruits', 25 , 30.25);
    
-- *************************************************** NEW SESSION ************************************************************************

--												INSERTING HIERACHICAL ROWS
    
-- it is tipically to add row in different tables
USE sql_store;
INSERT INTO orders (customer_id, order_date, status)
VALUES (1 , '2019-01-02', 1);

INSERT INTO order_items
VALUES 
	(LAST_INSERT_ID(), 1, 1, 2.95),
    (LAST_INSERT_ID(), 1, 1, 2.95);
    
SELECT *
FROM order_items;

-- *************************************************** NEW SESSION ************************************************************************

--												CREATING A COPY OF TABLE    

CREATE TABLE order_archived AS 
SELECT *
FROM orders;
-- it is used as a to duplicate orders table
-- truncate command is used for to delete entire data

INSERT INTO order_archived
SELECT *
FROM orders
WHERE order_date < '2019-01-01';

--  										***********		EXCERISE	***********

USE sql_invoicing;
-- CREATE TABLE invoices_archived AS
INSERT INTO invoices_archived
SELECT 
	i.invoice_id,
    i.number,
    c.name AS client_name,
    i.invoice_total,
    i.payment_total,
    i.invoice_date,
    i.due_date,
    i.payment_date
FROM invoices i
INNER JOIN clients c
	USING (client_id)
WHERE i.payment_date IS NOT NULL
ORDER BY payment_date;

-- *************************************************** NEW SESSION ************************************************************************

--													UPDATING ROWS

UPDATE invoices
SET payment_total = 10, payment_date = '2019-03-01'
WHERE invoice_id = 1;

UPDATE invoices
SET payment_total = DEFAULT, payment_date = NULL
WHERE invoice_id = 1;

-- *************************************************** NEW SESSION ************************************************************************

--						    						UPDATING MULTIPLE ROWS

USE sql_invoicing;
UPDATE invoices
SET
	payment_total = invoice_total *0.5,
    payment_date = due_date
WHERE client_id = 3;

--  										***********		EXCERISE	***********

USE sql_store;
UPDATE customers
SET
	points = points+50
WHERE birth_date < '1990-01-01';

SELECT *
FROM customers;

-- *************************************************** NEW SESSION ************************************************************************

--												USING SUBQUERIES IN UPDATES

USE sql_invoicing;
UPDATE invoices
SET
	payment_total = invoice_total*0.5,
    payment_date= due_date
WHERE client_id =
	(SELECT client_id
    FROM clients
    WHERE name = 'Myworks');

UPDATE invoices
SET
	payment_total = invoice_total * 0.5,
    payment_date = due_date
WHERE client_id IN
	(SELECT client_id
    FROM clients
    WHERE state IN ('CA', 'NY'));
    
--  										***********		EXCERISE	***********

-- to add comments where it is null in orders table as "Gold customers"
-- but only customers which have points more than 3000

USE sql_store;
UPDATE orders
SET comments = 'Gold Customers'
WHERE (comments IS NULL) AND (customer_id IN (
	SELECT customer_id
    FROM customers
    WHERE points >= 3000));
    
-- *************************************************** NEW SESSION ************************************************************************

--													 DELETEING ROWS

DELETE FROM customers
WHERE customer_id = (
	SELECT 
		customer_id
	FROM customers
    WHERE first_name = 'Ambur');
-- *************************************************** NEW SESSION ************************************************************************
   
--														CREATING NEW TABLE
USE sql_intro;

CREATE TABLE employees_b (Emp_Id INT PRIMARY KEY, emp_name VARCHAR(25), age INT , gender CHAR(1),
	doj DATE , dept VARCHAR(20), city VARCHAR(15), salary FLOAT);
    
DESCRIBE employees;
-- it use to get condition of table

INSERT INTO employees_b(emp_name, age, gender, doj, dept, city, salary)
	VALUES('Kunal', 19 ,'M' , '2016-08-13', 'Data Engineer', 'Pune', 1500000),
		('Ganesh', 20, 'M' , '2020-06-4', 'Data Engineer' , 'Pune' , 450000),
        ('Mangesh', 19 ,'M', '2020-05-20', 'Design' ,'Pune', 450000),
        ('Aditi', 20, 'F', '2019-06-02', 'Sales', 'Germany', 7500000),
        ('Rushikesh', 22, 'M', '2020-03-24', 'Production', 'Mumbai',650000),
        ('Prajwal',22, 'M', '2020-11-30', 'Design', 'Nashik', 1000000),
        ('Priya', 20, 'F', '2017-01-12', 'Account', 'Dubai', 700000),
        ('Yashodha', 20, 'F', '2016-08-13', 'Manager', 'Surat', 9500000),
        ('Pratham', 20, 'M', '2019-04-02', 'Production', 'Solapur', 6300000);
        
-- distinct ,avg,

SELECT dept, AVG(age)
FROM employees
GROUP BY dept;

SELECT COUNT(Emp_id) AS number_of_employee, city 
FROM employees
GROUP BY dept;

SELECT YEAR(doj) AS year_of_joining, count(Emp_id)
FROM employees
GROUP BY YEAR(doj);


--  										***********		EXCERISE	***********

CREATE TABLE sales (product_id INT PRIMARY KEY NOT NULL, sell_price FLOAT , quantity INT, state VARCHAR(20));

INSERT INTO sales
VALUES (12,70, 12, 'dehli'),
		(12, 80, 32, 'pune'),
        (15, 50, 45 ,'sangli'),
        (32, 70, 20, 'sangli'),
        (32, 60, 25, 'dehli'),
        (45,150,12, 'patna'),
        (02, 120, 69, 'nashik');
        

CREATE TABLE production_cost (product_id INT PRIMARY KEY NOT NULL, p_cost FLOAT NOT NULL);

DESCRIBE production_cost;

INSERT INTO production_cost
VALUES (12, 50),
	(15, 30),
    (32, 45),
	(45, 120),
    (02, 90);
    
SELECT s.product_id, sum((s.sell_price-p.p_cost)*s.quantity) AS total_profit
FROM sales s
JOIN production_cost p
	USING (product_id)
GROUP BY p.product_id;

-- *************************************************** NEW SESSION ************************************************************************

--													HAVING CLAUSE

SELECT DISTINCT city
FROM employees;

-- to find dept whose having more than 700000

SELECT AVG(salary) AS average_salary, dept
FROM employees
GROUP BY dept
HAVING AVG(salary) >= 900000;

-- to get number of employees in each dept

SELECT dept,count(Emp_id)
FROM employees
GROUP BY dept;

-- to get employees in each city except pune

SELECT city, count(Emp_id)
FROM employees
WHERE city != 'Pune'
GROUP BY city;

show databases;

-- *************************************************** NEW SESSION ************************************************************************

-- display emp_id from each dept with maximum salary

USE sql_intro;
SELECT Emp_id, emp_name, dept, salary
FROM employees
WHERE salary = (SELECT MAX(employees.salary))
GROUP BY dept
ORDER BY dept
LIMIT 3;

-- to get employees which have salary less than average salary of all employees

SELECT *
FROM employees
WHERE salary <(SELECT AVG(salary)FROM employees)
ORDER BY emp_name;

-- to get product which have more than 1000 in price
CREATE TABLE products (product_id INT PRIMARY KEY NOT NULL, p_name VARCHAR(15) NOT NULL, sell_price FLOAT, p_type VARCHAR(15));

INSERT INTO products
VALUES (101, 'Laptop', 1400.5, 'Luxury'),
	(102, 'Camera', 60.4, 'Non-luxury'),
    (103, 'Necklace', 1200.6, 'Non-luxury'),
    (104, 'Sofa', 800.3, 'Non-luxury');
    
CREATE TABLE orders (order_id INT PRIMARY KEY, product_sold VARCHAR(15), selling_price INT);

INSERT INTO orders
SELECT product_id
FROM products
WHERE product_id IN (SELECT product_id FROM products WHERE sell_price>1000);
 
 -- code is not running
 
 UPDATE employees
 SET salary = salary * 0.35 
 WHERE (age IN (SELECT age FROM employees_b WHERE age >=20));


-- *************************************************** NEW SESSION ************************************************************************

--													 	TRIGGER
CREATE DATABASE pratice;

USE pratice;
CREATE TABLE customers(customer_id INT PRIMARY KEY NOT NULL, age INT NOT NULL, address varchar(25), phone_no INT(10));

DELIMITER //
CREATE TRIGGER age_verify
BEFORE INSERT ON pratice.customers
FOR EACH ROW
IF NEW.age < 0
THEN SET NEW.age = 0;
END IF;// 

INSERT INTO customers
VALUES (120, 23, 'lane no. 8, kazi chowk', 842213364),
	(124, -23, 'lane no. 8, kazi chowk', 842213364),
	(122, -13, 'lane no. 8, kazi chowk', 842213364),
	(123, 44, 'lane no. 8, kazi chowk', 842213364);

CREATE TABLE customer1(customers_id INT PRIMARY KEY, name VARCHAR(20), email VARCHAR(30), brithday DATE);

CREATE TABLE message(customeres_id INT , message VARCHAR(25) NOT NULL PRIMARY KEY, message_id INT);

DELIMITER //
CREATE TRIGGER date_verify
AFTER INSERT ON customer1
FOR EACH ROW
IF NEW.brithday IS NULL
THEN INSERT INTO message(message)
VALUES (CONCAT('Hi ', NEW.name, ', please update birthdate'));
END IF;//

INSERT INTO customer1
VALUES (140, 'Kunal Gaikwad', 'ahfuabfuu', NULL),
	(144, 'Ruturaj Ghadge', 'ahfuabfuu', NULL);
    
CREATE TABLE employees (emp_id INT PRIMARY KEY, name VARCHAR(15), age INT, salary INT(20), message varchar(35));

INSERT INTO employees
VALUES (101, 'Kunal', 32, 48000, NULL),
	(102, 'Mangesh', 44, 35000, NULL),
    (103,'Ganesh', 78, 8000, NULL),
    (104, 'Rushikesh', 63, 85000, NULL);


DELIMITER //
CREATE TRIGGER salary_status
BEFORE UPDATE ON employees
FOR EACH ROW
IF NEW.salary < 10000
THEN SET NEW.message = 'Low';
ELSE IF NEW.salary < 50000
THEN SET NEW.message = 'Medium';
ELSE IF NEW.salary < 100000
THEN SET NEW.message = 'High';
END IF;
END IF;
END IF//

UPDATE employees
SET salary = 850000;


CREATE TABLE salary_detail
	(emp_id INT PRIMARY KEY,
    valid_from DATE NOT NULL,
    amount FLOAT NOT NULL);

INSERT INTO salary_detail
VALUES(101, '2004-03-01', 56400),
	(102, '2006-12-06', 48100),
    (103, '2000-03-14', 81551),
    (104, '2012-09-25',55132);
    
CREATE TABLE salary_del
	(id INT PRIMARY KEY AUTO_INCREMENT,
    ep_id INT,
    valid_from DATE,
    amount FLOAT,
    del_date TIMESTAMP DEFAULT NOW());
    

DELIMITER //
CREATE TRIGGER salary_delete
BEFORE DELETE ON salary_detail
FOR EACH ROW
INSERT INTO salary_del(ep_id, valid_from, amount)
VALUES (OLD.emp_id, OLD.valid_from, OLD.amount);
END IF;//

DELETE FROM salary_detail
WHERE emp_id = 104;

-- code is not running

-- *************************************************** NEW SESSION ************************************************************************

--													PROCEDURE CLAUSE

USE sql_store;

-- PROCEDURE for WHERE CLAUSE
DELIMITER //
CREATE PROCEDURE top_pointer()
BEGIN
SELECT first_name, last_name, points, city
FROM customers
WHERE points >= 2500;
END ; //
DELIMITER ; 

CALL top_pointer();

-- PROCEDURE FOR IN OPERATOR

USE sql_hr;

DELIMITER //
CREATE PROCEDURE salary_sorter(IN num INT)
BEGIN
SELECT employee_id, first_name, last_name, job_title, salary
FROM employees
ORDER BY salary DESC
LIMIT num;
END ; //
DELIMITER ;

CALL salary_sorter(3);

-- PROCEDURE for UPDATE CLAUSE 

DELIMITER //
CREATE PROCEDURE salary_cut(IN new_name VARCHAR(25), IN cut FLOAT)
BEGIN
UPDATE sql_hr.employees
SET salary = salary*cut
WHERE first_name=new_name;
END ; //
DELIMITER ;

CALL salary_cut('Sayer', 0.25);

-- PROCEDURE for OUT CLAUSE

USE sql_intro;

DELIMITER //
CREATE PROCEDURE emp_gender_count(OUT gender_count INT)
BEGIN
SELECT COUNT(emp_name) INTO gender_count
FROM employees
WHERE gender ='F';
END //
DELIMITER ;

CALL emp_gender_count(@F_emp);
SELECT @F_emp AS female_count;


CREATE TABLE students(st_roll INT, age INT, name VARCHAR(30), mark FLOAT)

DELIMITER //
CREATE TRIGGER mark_verify
BEFORE INSERT ON students
FOR EACH ROW
IF NEW.mark < 0
THEN SET NEW.mark = 50;
END IF;


INSERT INTO students
VALUES (103, 12, 'kunal', -12.05)

-- *************************************************** NEW SESSION ************************************************************************

--													 	VIEWS

USE sql_intro;
CREATE VIEW emp_detail AS
SELECT Emp_id, emp_name, age, gender, city
FROM employees
ORDER BY emp_name;

USE sql_store;

CREATE VIEW order_detail AS
SELECT o.order_id, o.customer_id, o.order_date, first_name, last_name
FROM orders o
JOIN customers c
USING (customer_id);

RENAME TABLE customers
TO customers_name;

SHOW FULL TABLES
WHERE table_type = 'VIEW';

-- *************************************************** NEW SESSION ************************************************************************

--									 					 WINDOW

USE sql_intro;

SELECT Emp_id, emp_name, age , dept, salary,
	AVG(salary) OVER(PARTITION BY dept ORDER BY salary DESC) AS average_salary
FROM employees;

SELECT Emp_id,
	emp_name,
    age,
	dept,
    salary,
    FIRST_VALUE(emp_name) OVER (PARTITION BY dept ORDER BY salary DESC) AS highest_salary
FROM employees
ORDER BY dept;

