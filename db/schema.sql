DROP DATABASE IF EXISTS crave;
CREATE DATABASE crave;

use crave;

DROP TABLE IF NOT EXISTS resturants;
CREATE TABLE resturants (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  phone varchar(10),
);

DROP TABLE IF EXISTS dishes;
CREATE TABLE dishes (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255),
  rating int(1),
  resturant_id int(11) NOT NULL,
);

