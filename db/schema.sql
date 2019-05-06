-- Created the DB "burgers_db" 
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "actors" 
CREATE TABLE burgers
(
  id int AUTO_INCREMENT,
  burger_name varchar (30) NOT NULL,
  devoured Boolean not null,
   PRIMARY KEY (id)
);

