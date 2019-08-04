-- mysql -u Test -h localhost -p
create database Test;
use database Test;
-- create user 'Test'@'192.168.100.2' IDENTIFIED BY 'Test.123';
create user 'Test'@'localhost' IDENTIFIED BY 'Test.123';
-- grant all privileges on *.* TO 'Test'@'192.168.100.2'
grant all privileges on Test.* TO 'Test'@'localhost'


create table Cajeros(
    Cajero int AUTO_INCREMENT primary key,
    NomApels nvarchar(255)
);
create table Productos(
    Producto int AUTO_INCREMENT primary key,
    Nombre nvarchar(100),
    Precio decimal(8,2)
);
create table Maquinas_Registradoras(
    Maquina int AUTO_INCREMENT primary key,
    Piso int
);
create table Venta(
    Cajero int ,
    Maquina int ,
    Producto int,
    foreign key(Cajero) references Cajeros(Cajero),
    foreign key(Producto) references Productos(Producto),
    foreign key(Maquina) references Maquinas_Registradoras(Maquina)
);
insert into Cajeros values(DEFAULT,"Miguel Morales");
insert into Cajeros values(DEFAULT,"Pedro Morales");
insert into Cajeros values(DEFAULT,"Miguel Ramirez");
insert into Cajeros values(DEFAULT,"Martin Ramirez");
insert into Cajeros values(DEFAULT,"Martin Asaustre");
insert into Productos values(DEFAULT,"Leche",10.50);
insert into Productos values(DEFAULT,"Papas",11.50);
insert into Productos values(DEFAULT,"Arroz",5);
insert into Productos values(DEFAULT,"Cereal",20.50);
insert into Productos values(DEFAULT,"Costal de frijol",100);
insert into Productos values(DEFAULT,"Huevo",50);
insert into Productos values(DEFAULT,"Mueble",5000);
insert into Maquinas_Registradoras values(DEFAULT,1);
insert into Maquinas_Registradoras values(DEFAULT,2);

insert into venta values(5,1,7);
insert into venta values(1,1,1);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,6);
insert into venta values(1,1,1);
insert into venta values(1,1,2);
insert into venta values(1,1,3);
insert into venta values(1,1,4);
insert into venta values(1,1,4);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,1);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,6);
insert into venta values(1,1,1);
insert into venta values(1,1,2);
insert into venta values(1,1,3);
insert into venta values(1,1,4);
insert into venta values(1,1,4);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,1);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,6);
insert into venta values(1,1,1);
insert into venta values(1,1,2);
insert into venta values(1,1,3);
insert into venta values(1,1,4);
insert into venta values(1,1,4);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,1);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,6);
insert into venta values(1,1,1);
insert into venta values(1,1,2);
insert into venta values(1,1,3);
insert into venta values(1,1,4);
insert into venta values(1,1,4);
insert into venta values(1,1,5);
insert into venta values(1,1,5);
insert into venta values(1,1,5);

insert into venta values(2,2,1);
insert into venta values(3,2,5);
insert into venta values(4,2,5);
insert into venta values(3,2,5);
insert into venta values(2,2,6);
insert into venta values(3,2,1);
insert into venta values(4,2,2);
insert into venta values(2,2,3);
insert into venta values(2,2,4);
insert into venta values(2,2,4);
insert into venta values(2,2,5);
insert into venta values(2,2,5);
insert into venta values(2,2,5);
insert into venta values(2,2,1);
insert into venta values(3,2,5);
insert into venta values(4,2,5);
insert into venta values(3,2,5);
insert into venta values(2,2,6);
insert into venta values(3,2,1);
insert into venta values(4,2,2);
insert into venta values(2,2,3);
insert into venta values(2,2,4);
insert into venta values(2,2,4);
insert into venta values(2,2,5);
insert into venta values(2,2,5);
insert into venta values(2,2,5);
insert into venta values(2,2,1);
insert into venta values(3,2,5);
insert into venta values(4,2,5);
insert into venta values(3,2,5);
insert into venta values(2,2,6);
insert into venta values(3,2,1);
insert into venta values(4,2,2);
insert into venta values(2,2,3);
insert into venta values(2,2,4);
insert into venta values(2,2,4);
insert into venta values(2,2,5);
insert into venta values(2,2,5);
insert into venta values(2,2,5);
    -- Muestra e numero de ventas
select Productos.Nombre, count(*) from venta 
LEFT JOIN productos ON venta.Producto = productos.Producto
 group by Productos.Nombre order by count(*) DESC ; 
-- Informe
select Cajeros.NomApels as "Cajero", Productos.Nombre  as 'Producto', Productos.Precio as "Precio del producto", Maquinas_Registradoras.Piso
from Venta
LEFT JOIN Productos on venta.Producto = Productos.Producto
LEFT JOIN Maquinas_Registradoras on venta.Maquina = Maquinas_Registradoras.Maquina
LEFT JOIN Cajeros on venta.Cajero = Cajeros.Cajero;
-- Ventas totales
select  Maquinas_Registradoras.Piso , sum(Productos.Precio) as Total
from venta
LEFT JOIN Productos on venta.Producto = Productos.Producto
LEFT JOIN Maquinas_Registradoras on venta.Maquina = Maquinas_Registradoras.Maquina
group by Maquinas_Registradoras.Piso;
-- Ventas de un cajero
select Cajeros.Cajero as "Codigo", Cajeros.NomApels as "Cajero", sum(Productos.Precio) as Total  
from venta
LEFT JOIN Productos on venta.Producto = Productos.Producto
LEFT JOIN Cajeros on venta.Cajero = Cajeros.Cajero
group by Cajeros.Cajero;
-- Ventas de un cajero
select Cajeros.Cajero as "Codigo", Cajeros.NomApels as "Cajero"  
from venta
LEFT JOIN Productos on venta.Producto = Productos.Producto
LEFT JOIN Maquinas_Registradoras on venta.Maquina = Maquinas_Registradoras.Maquina
LEFT JOIN Cajeros on venta.Cajero = Cajeros.Cajero
where Maquinas_Registradoras.Maquina in (select  Maquinas_Registradoras.Piso
    from venta
    LEFT JOIN Productos on venta.Producto = Productos.Producto
    LEFT JOIN Maquinas_Registradoras on venta.Maquina = Maquinas_Registradoras.Maquina
    group by Maquinas_Registradoras.Piso
    having sum(Productos.Precio)<5000)
;

create table clientes(
    id int AUTO_INCREMENT primary key,
    Nombre varchar(80) default '',
    Apellidos varchar(80) default '',
    Nombre_Usuario varchar(80) default '',
    Correo_Electronico varchar(80) default '',
    Contrasena varchar(80) default '',
    Edad int default 0,
    Estatura decimal(3,2) default 0.0,
    Peso int default 0,
    GEB int default 0
)
