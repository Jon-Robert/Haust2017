create table Customer (
	CUS_CODE integer not null primary key,
	CUS_LNAME varchar(30),
	CUS_FNAME varchar(30),
	CUS_INITIAL varchar(1),
	CUS_AREACODE integer(4),
	CUS_PHONE varchar(30),
	CUS_BALANCE integer default 0
);

create table Invoice (
	INV_NUMBER integer not null primary key,
	CUS_CODE integer not null,
	INV_DATE date
);

create table Line (
	LINE_NUMBER integer,
	LINE_UNITS integer,
	LINE_PRICE integer
);

create table Product (
	PROD_CODE integer not null primary key,
	PROD_DESCRIPT varchar(77),
	PROD_PRICE integer,
	PROD_ON_HAND integer default 0
);

create table Verdor (
	VEND_CODE integer not null primary key,
	VEND_CONTACT varchar,
	VEND_AREACODE integer(4),
	VEND_PHONE varchar (20)
);