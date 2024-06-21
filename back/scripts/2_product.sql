CREATE TABLE PRODUCTO (
    ID_PRODUCTO SERIAL,
    NOMBRE VARCHAR(50),
    DETALLE VARCHAR(200),
    VALOR NUMERIC,
    CONSTRAINT pk_product_id PRIMARY KEY (ID_PRODUCTO)
);


INSERT INTO PRODUCTO (NOMBRE, DETALLE, VALOR) VALUES 
('Telefono inteligente', 'Telefono de ultima generacion con camara de alta resolucion y pantalla tactil.', 599.99 ),
('Camisa de algodon', 'Camisa comoda y fresca ideal para el verano.', 29.99),
('Sarten antiadherente', 'Sarten de calidad premium con revestimiento antiadherente.', 39.99 ),
('Peluche de oso', 'Peluche suave y adorable, perfecto para regalar.', 15.99),
('Novela de misterio', 'Libro emocionante lleno de intriga y suspenso.', 12.99),
('Balon de futbol', 'Balon oficial de tamano estandar para jugar al futbol.', 19.99),
('Crema hidratante', 'Crema hidratante para el cuidado diario de la piel.', 9.99),
('Aceite de motor sintetico', 'Aceite de motor sintetico de alta calidad para automoviles.', 24.99),
('Podadora electrica', 'Podadora electrica para mantener el cesped corto y limpio.', 149.99),
('Collar de perlas', 'Elegante collar de perlas perfecto para ocasiones especiales.', 79.99);