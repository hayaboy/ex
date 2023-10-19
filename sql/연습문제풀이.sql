select * from orders;
--���� �ֹ��� ������ �� �Ǹž�, ��հ�, ������, �ְ��� 
select sum(saleprice) as ���Ǹž�, avg(saleprice) as ��հ�, max(saleprice) �ְ� , min(saleprice) ������ from orders;

--������(group by)  �ֹ��� ������ �� ������ �� �Ǹž�

select custid, sum(saleprice) from orders group by custid;   --group by �Լ��� �����ռ�(sum, avg, count, max, min)�� ���� ����Ͽ�����

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
























