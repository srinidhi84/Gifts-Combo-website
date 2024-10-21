create database winni;
use winni;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
drop table users;

-- Create the cart table
CREATE TABLE cart (
  id INT AUTO_INCREMENT,
  product_name VARCHAR(255),
  product_price DECIMAL(10, 2),
  product_image VARCHAR(255),
  PRIMARY KEY (id)
);
select * from cart; 
drop table cart;

CREATE TABLE billing_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
create table user(id int primary key auto_increment,email varchar(52),password varchar(52),mobile varchar(20));
select * from user;