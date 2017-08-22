--Database lwqecljbx2oh1nek already created on JAWSDB
--CREATE DATABASE burgers_db;
USE lwqecljbx2oh1nek;

CREATE TABLE `burgers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255) NOT NULL,
  `devoured` BOOLEAN DEFAULT 0,
  `date`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY ( `id` ) 
);