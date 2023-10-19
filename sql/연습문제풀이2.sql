desc book;
--BOOKID    NOT NULL NUMBER(2)    
--BOOKNAME           VARCHAR2(40) 
--PUBLISHER          VARCHAR2(40) 
--PRICE              NUMBER(8) 

desc customer;

--CUSTID  NOT NULL NUMBER(2)    
--NAME             VARCHAR2(40) 
--ADDRESS          VARCHAR2(50) 
--PHONE            VARCHAR2(20) 

desc orders;
--ORDERID   NOT NULL NUMBER(2) 
--CUSTID             NUMBER(2) 
--BOOKID             NUMBER(2) 
--SALEPRICE          NUMBER(8) 
--ORDERDATE          DATE

select * from book where BOOKID = 1;
select BOOKNAME from book where BOOKID = 1;

select BOOKNAME from book where PRICE >= 20000;


select count(*) from book;

select PUBLISHER from book;

select distinct PUBLISHER from book;

select count(distinct PUBLISHER)  as  "출판사 총 개수" from book;

select NAME, address from customer;

-- and
select * from orders where orderdate  >= '14/07/04' and orderdate < = '14/07/07';

-- or
select * from orders where orderdate  >= '14/07/04' and orderdate < = '14/07/07';
select * from orders where not (orderdate  < '14/07/04'  or   orderdate > '14/07/07');



select * from orders where orderdate not between   '14/07/04' and  '14/07/07';

-- 성이 ‘김’ 씨인 고객의 이름과 주소

select name, address from customer where name like '김%';

select name, address from customer where name like '김%아';

SELECT SUM(saleprice), AVG(saleprice)FROM Orders;

-- join(테이블 합), subquery(부속 질의)

-- 부속 질의 형태
-- select 필드 from 테이블 where 조건;
-- select 필드 from 테이블 where ();
select * from book where price >=20000;

select * from orders;

select saleprice from orders where bookid in (select bookid from book where price >=20000);

--박지성(고객)의 총 구매(주문)액(박지성의 고객번호는 1번으로 놓고 작성

--select * from customer, orders where customer.custid=orders.custid and customer.custid =1;

select sum(saleprice) from customer, orders where customer.custid=orders.custid and customer.custid =1;


SELECT COUNT(DISTINCT publisher) 
	FROM Customer, Orders, Book 
	WHERE Customer.custid=Orders.custid AND Orders.bookid=Book.bookid
	         AND Customer.name LIKE '박지성';
             
             
             
             
























