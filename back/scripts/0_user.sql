CREATE TABLE USUARIO (ID_USUARIO serial, USERNAME varchar(30), PASSWORD varchar(30), 
	constraint pk_user_id primary key (user_id));
	
INSERT INTO USUARIO (USERNAME,PASSWORD ) values ('admin', 'admin')
