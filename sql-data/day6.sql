use jc1504;

select * from cart;
select * from products;
select * from roles;
select * from transaction;
select * from transactionitem;
select * from users;


select * from products where harga > hargaMin and harga < hargaMax;
select * from products where id = 3;

select
	c.id,
    u.username,
    p.nama,
    c.quantity,
    (c.quantity * p.harga) as total
from cart c
join users u on c.userID = user.id
join products p on p.id = productID
where c.userID = 15;

select * from mysql.user;
ALTER USER 'Fikriansyah'@'%' IDENTIFIED WITH mysql_native_password BY 'asd123'