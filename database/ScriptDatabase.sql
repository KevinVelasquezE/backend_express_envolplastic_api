CREATE DATABASE db_envolplastic;

USE db_envolplastic;

-- Creen una tabla de usuario con 
-- los siguientes campos:
-- (id, usuario, email, password, tipo_usuario, estado)

CREATE TABLE USUARIOS(
	id int not null primary key auto_increment,
    usuario varchar(100) not null, 
    email varchar(100) not null, 
    password varchar(100) not null, 
    tipo_usuario varchar(100) not null,
    estado boolean
);

SELECT * FROM USUARIOS;

-- Crear un api que me permita registrar N usuarios.
-- Usar Metodo POST -- resultados desde Postman
INSERT INTO USUARIOS(usuario, email, password, tipo_usuario, estado)
VALUES('HROJAS', 'HROJAS@GMAIL.COM','123', 'ADMIN',true);

-- Api para obtner usuario por id
SELECT * FROM USUARIOS where id=2;


CREATE TABLE categoria(
	id int not null primary key auto_increment,
	codigo char(10),
    descripcion varchar(100),
    estado boolean
);

DROP TABLE persona;
create table persona(
	id int not null primary key auto_increment,
    dni char(8),
    nombres varchar(100),
	apellidos varchar(100),
    telefono char(10),
    email varchar(100),
    direccion varchar(100),
    genero char(10),
    tipo_persona varchar(100),  -- CLIENTE, EMPLEADO, ADMINISTRADOR, SUB ADMINISTRADOR
    estado boolean
);

CREATE TABLE productos(
	id int not null primary key auto_increment,
    descripcion varchar(100) not null,
    precio_unitario double,
    precio_venta double,
    stock int,
    id_categoria int,
    estado boolean,
    foreign key(id_categoria) references categoria(id)
);

-- Trabajo en clase   Datos del comprobante  FAC, BOLETA, ETC
DROP TABLE cabecera;
CREATE TABLE cabecera(
	id int not null primary key auto_increment,
    codigo char(10) not null,  -- 0001
    serie char(10) not null,   -- F, B , NV, NG , ETC
    correlativo char(10) not null, -- 0001    -- F0001-0001
    fecha_emision datetime not null,
    importe_sub_total decimal not null,  -- 100   -- Sale de la suma del sub_total de la tabla  detalle
    igv decimal not null,  -- importe_sub_total * 0.18  -- 18
    importe_total decimal not null,  -- Importe_sub_total + igv  -- 118
    id_persona int not null,
    id_usuario int not null,
    descripcion varchar(200),
    estado boolean,
    foreign key(id_persona) references persona(id),  -- 
    foreign key(id_usuario) references usuarios(id)
);

-- Datos de desglose o detalles de cabecera ejemplo productos relacionedos a un comprobante sea boleta factura nota de venta etc
DROP TABLE DETALLES;
CREATE TABLE DETALLES(
	id int not null primary key auto_increment,
    id_cabecera int not null,
	id_producto int not null,
    cantidad int not null,
    precio_unitario double not null,
    sub_total double,     -- cantidad * precio_unitario
    foreign key (id_cabecera) references cabecera(id),
    foreign key (id_producto) references productos(id)
);
