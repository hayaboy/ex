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

select count(distinct PUBLISHER)  as  "���ǻ� �� ����" from book;

select NAME, address from customer;

-- and
select * from orders where orderdate  >= '14/07/04' and orderdate < = '14/07/07';

-- or
select * from orders where orderdate  >= '14/07/04' and orderdate < = '14/07/07';
select * from orders where not (orderdate  < '14/07/04'  or   orderdate > '14/07/07');



select * from orders where orderdate not between   '14/07/04' and  '14/07/07';

-- ���� ���衯 ���� ���� �̸��� �ּ�

select name, address from customer where name like '��%';

select name, address from customer where name like '��%��';

SELECT SUM(saleprice), AVG(saleprice)FROM Orders;

-- join(���̺� ��), subquery(�μ� ����)

-- �μ� ���� ����
-- select �ʵ� from ���̺� where ����;
-- select �ʵ� from ���̺� where ();
select * from book where price >=20000;

select * from orders;

select saleprice from orders where bookid in (select bookid from book where price >=20000);

--������(��)�� �� ����(�ֹ�)��(�������� ����ȣ�� 1������ ���� �ۼ�

--select * from customer, orders where customer.custid=orders.custid and customer.custid =1;

select sum(saleprice) from customer, orders where customer.custid=orders.custid and customer.custid =1;


SELECT COUNT(DISTINCT publisher) 
	FROM Customer, Orders, Book 
	WHERE Customer.custid=Orders.custid AND Orders.bookid=Book.bookid
	         AND Customer.name LIKE '������';
             
             
             
             
























