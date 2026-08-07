CREATE DATABASE Agendamentos;
USE Agendamentos;

CREATE TABLE agendamento(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome CHAR(255) NOT NULL,
    procedimento CHAR(255) NOT NULL,
    dia DATE NOT NULL,
    hora TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);