CREATE DATABASE jwt-pern-auth;

CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users(name, email, password) VALUES ('Henry', '123@gmail.com', 'kth123456')