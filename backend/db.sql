DROP DATABASE IF EXISTS meu_guru;

CREATE DATABASE meu_guru;

USE meu_guru;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  idade INT NOT NULL,
  sexo VARCHAR(10) NOT NULL,
  cidade VARCHAR(50) NOT NULL
);
