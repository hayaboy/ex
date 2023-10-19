-- insert문
SELECT * FROM BOOK;
INSERT INTO book(bookid, bookname, publisher, price ) VALUES(11, '스포츠 의학', '한솔의학서적', 90000);
INSERT   INTO Book(bookid, bookname, publisher)	VALUES (14, '스포츠 의학', '한솔의학서적');

INSERT   INTO Book( bookid, bookname, price, publisher) 
SELECT bookid, bookname, price, publisher FROM  Imported_book;
-- update문
select * from customer where custid='5';
update customer set address='대한민국 부산' where custid='5';

SELECT address
		FROM Customer
		WHERE name='김연아';

select * from customer where name LIKE '박세리';
UPDATE	Customer
SET 	address = (SELECT address
		FROM Customer
		WHERE name='김연아')
WHERE 	name LIKE '박세리';

select * from customer;
select * from customer where custid=5;
delete from customer where custid=5;
DELETE 	FROM 	Customer;

--1) 박지성이 구매한 도서의 출판사와 같은 출판사에서 도서를 구매한 고객의 이름


--2) 두 개 이상의 서로 다른 출판사에서 도서를 구매한 고객의 이름

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

--3) 전체 고객의 30% 이상이 구매한 도서












--outer 조인(외부 조인)
--도서를 구매하지 않은 고객을 포함하여 고객의 이름과 고객이 주문한 도서의 판매가격을 구하시오.

--도서를 구매한 고객
--inner 조인(customer.custid=orders.custid 조건을 만족하는 행만 나와라)
SELECT	* from customer, orders where customer.custid=orders.custid;

--outer(full, left, right) 조인((customer.custid=orders.custid 조건을 만족하지 않더라도 다 나와라)
SELECT	* from customer FULL outer JOIN orders on  customer.custid=orders.custid;
SELECT	* from customer left outer JOIN orders on  customer.custid=orders.custid;
SELECT	* from customer right outer JOIN orders on  customer.custid=orders.custid;













