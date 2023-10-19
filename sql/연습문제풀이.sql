select * from orders;
--고객이 주문한 도서의 총 판매액, 평균값, 최저가, 최고가를 
select sum(saleprice) as 총판매액, avg(saleprice) as 평균값, max(saleprice) 최고가 , min(saleprice) 최저가 from orders;

--고객별로(group by)  주문한 도서의 총 수량과 총 판매액

select custid, sum(saleprice) from orders group by custid;   --group by 함수는 집계합수(sum, avg, count, max, min)와 같이 사용하여야함

select custid, sum(saleprice) from orders group by custid order by custid;

select name from customer where custid in (select customer.custid from orders , customer  where orders.custid = customer.custid group by customer.custid);

--select customer.custid, sum(orders.saleprice) from orders, customer  where orders.custid = customer.custid group by customer.custid;

select customer.custid, customer.name, sum(orders.saleprice) , round(avg(orders.saleprice),2)
from orders , customer  
where orders.custid = customer.custid 
group by customer.custid, customer.name;


select customer.custid, customer.name, sum(orders.saleprice) , round(avg(orders.saleprice),2)
from orders , customer  
where orders.custid = customer.custid 
group by customer.custid, customer.name
having sum(saleprice) >= 33000;
























