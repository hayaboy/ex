--create TABLE userTBL (
--    userID CHAR(8) not null primary key,
--    userName NVARCHAR2(10) not null,
--    birthYear number(4) not null,
--    addr nchar(2) not null,
--    mobile1 char(3),
--    mobile2 char(8),
--    height number(3),
--    mDate date
--);

--create TABLE buyTBL (
--    idNum number(8) not null primary key,
--    userID CHAR(8) not null,
--    prodName nchar(6) not null,
--    groupName nchar(4),
--    price number(8) not null,
--    amount number(8) not null,
--    foreign key (userID) REFERENCES userTBL(userID)
--);

select * from buytbl;
select * from usertbl;

-- insert into userTBL values ();




