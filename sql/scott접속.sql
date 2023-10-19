--3시 30분에 1조부터 발표
--1조 - 1번

select *
from emp
where ename like '%S';


--2조 - 2번
SELECT EMPNO,ENAME,JOB,SAL,DEPTNO FROM EMP 
WHERE DEPTNO = 30 AND JOB LIKE 'SALESMAN';
--3조 - 3번
SELECT EMPNO, ENAME, JOB, SAL, DEPTNO  FROM EMP WHERE DEPTNO IN (20,30) AND SAL >2000;

SELECT EMPNO, ENAME, JOB, SAL, DEPTNO
  FROM EMP
 WHERE DEPTNO = 20
   AND SAL > 2000
UNION
SELECT EMPNO, ENAME, JOB, SAL, DEPTNO
  FROM EMP
 WHERE DEPTNO = 30
   AND SAL > 2000;
--4조 - 4번
SELECT * FROM EMP WHERE NOT SAL >= 2000 AND SAL <= 3000;

--5조 - 5번
SELECT * FROM EMP;
SELECT * FROM EMP WHERE ENAME LIKE '%E%';
SELECT * FROM EMP WHERE DEPTNO = '30';
SELECT * FROM EMP WHERE NOT SAL BETWEEN 1000 AND 2000;

SELECT EMPNO, ENAME, SAL, DEPTNO FROM EMP WHERE ENAME LIKE '%E%' AND DEPTNO = '30' AND NOT SAL BETWEEN 1000 AND 2000;


--6조 - 6번
SELECT * FROM EMP
WHERE COMM IS NULL 
AND MGR IS NOT NULL
AND JOB IN ('MANAGER', 'CLERK')
AND ENAME NOT LIKE '_L%';




--3-1)
--rpad, substr, length

select empno, rpad(substr(empno,1,2),4,'*'), ename, rpad(substr(ename,1,1),5,'*')
from emp
where length(ename) = 5;

--2
select 
EMPNO,ENAME,SAL,
TRUNC((SAL/21.5),2) DAY_PAY,
ROUND((SAL/21.5/8),1)TIME_PAY
FROM emp;


--3

SELECT EMPNO,
       ENAME,
       TO_CHAR( HIREDATE, 'YYYY/MM/DD') "HIREDATE",
       TO_CHAR(add_months(next_day(hiredate,'월'),3),'yyyy-mm-dd') "R_JOB",
       
       NVL2 (COMM, TO_CHAR(COMM) ,'N/A') "COMM"
FROM EMP;       

SELECT EMPNO, ENAME, NVL(TO_CHAR(MGR), ' ') AS MGR,
CASE 
WHEN MGR IS NULL THEN '0000'
WHEN SUBSTR(MGR,1,2) = 75 THEN '5555'
WHEN SUBSTR(MGR,1,2) = 76 THEN '6666'
WHEN SUBSTR(MGR,1,2) = 77 THEN '7777'
WHEN SUBSTR(MGR,1,2) = 78 THEN '8888'
ELSE TO_CHAR(MGR)
END AS CHG_MGR FROM EMP;


--조인 연습
select * from emp; 
select * from emp, dept;

-- from 절에 지정한 테이블에는 select 절의 열에 사용한 것처럼 별칭을 지정할 수 있다.
select * from emp e, dept d where e.deptno=d.deptno;

select * from emp e, dept d where e.deptno=d.deptno order by e.empno;







--1 급여가 2000을 초과한 사원들의 부서정보,사원정보
select d.deptno, d.dname, e.empno, e.ename, e.sal
from dept d,emp e
where e.sal > 2000 and e.deptno = d.deptno
order by d.deptno;
--2
select dept.deptno, dept.dname, trunc(avg(sal),0), max(sal), min(sal), count(dept.dname) 
from emp, dept
where emp.deptno = dept.deptno
group by dept.deptno, dept.dname;
--3

select * from emp;

select * from dept;

select d.deptno, d.dname, e.empno, e.ename, e.job,e.sal 
from dept d, emp e where e.deptno(+) = d.deptno 
order by d.deptno asc, e.ename asc;







--4
-- 4. 
--SQL-99방식
select
dept.deptno
, dept.dname
, e1.empno
, e1.ename
, e1.mgr
, e1.sal
, s.*
, e2.empno as mgr_empno
, e2.ename as mgr_ename
from emp e1
full outer join dept on e1.deptno = dept.deptno
left outer join emp e2 on e1.mgr = e2.empno
left join salgrade s on e1.sal between s.losal and s.hisal
order by dept.deptno asc, e1.ename asc;
--SQL-99 이전 방식
SELECT d.deptno, D.DNAME, E.EMPNO, E.ENAME, E.MGR, E.SAL, E.DEPTNO,
       S.LOSAL, S.HISAL, S.GRADE,
       E2.EMPNO as MGR_EMPNO,  E2.ENAME AS MGR_ENAME
FROM EMP e , DEPT d, SALGRADE s, EMP e2
where e.deptno(+)=d.deptno and e.sal between s.losal(+) and s.hisal(+) and e.mgr=e2.empno(+)
order by  D.DEPTNO, E.EMPNO;





































