-- insert��
SELECT * FROM BOOK;
INSERT INTO book(bookid, bookname, publisher, price ) VALUES(11, '������ ����', '�Ѽ����м���', 90000);
INSERT   INTO Book(bookid, bookname, publisher)	VALUES (14, '������ ����', '�Ѽ����м���');

INSERT   INTO Book( bookid, bookname, price, publisher) 
SELECT bookid, bookname, price, publisher FROM  Imported_book;
-- update��
select * from customer where custid='5';
update customer set address='���ѹα� �λ�' where custid='5';

SELECT address
		FROM Customer
		WHERE name='�迬��';

select * from customer where name LIKE '�ڼ���';
UPDATE	Customer
SET 	address = (SELECT address
		FROM Customer
		WHERE name='�迬��')
WHERE 	name LIKE '�ڼ���';

select * from customer;
select * from customer where custid=5;
delete from customer where custid=5;
DELETE 	FROM 	Customer;

--1) �������� ������ ������ ���ǻ�� ���� ���ǻ翡�� ������ ������ ���� �̸�


--2) �� �� �̻��� ���� �ٸ� ���ǻ翡�� ������ ������ ���� �̸�

SELECT name FROM Customer
	WHERE 2 >= 5;

SELECT COUNT(DISTINCT publisher) FROM Customer, Orders, Book 
		 WHERE Customer.custid=Orders.custid
	             AND Orders.bookid=Book.bookid AND (name LIKE Customer.name);
                 
SELECT name FROM Customer c
	WHERE  2 >= 
(SELECT COUNT(DISTINCT publisher) FROM Customer, Orders, Book 
		 WHERE Customer.custid=Orders.custid
	             AND Orders.bookid=Book.bookid AND (name LIKE c.name));

--3) ��ü ���� 30% �̻��� ������ ����












--outer ����(�ܺ� ����)
--������ �������� ���� ���� �����Ͽ� ���� �̸��� ���� �ֹ��� ������ �ǸŰ����� ���Ͻÿ�.

--������ ������ ��
--inner ����(customer.custid=orders.custid ������ �����ϴ� �ุ ���Ͷ�)
SELECT	* from customer, orders where customer.custid=orders.custid;

--outer(full, left, right) ����((customer.custid=orders.custid ������ �������� �ʴ��� �� ���Ͷ�)
SELECT	* from customer FULL outer JOIN orders on  customer.custid=orders.custid;
SELECT	* from customer left outer JOIN orders on  customer.custid=orders.custid;
SELECT	* from customer right outer JOIN orders on  customer.custid=orders.custid;













