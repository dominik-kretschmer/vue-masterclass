DROP TABLE IF EXISTS inquires;

CREATE TABLE inquires
(
    id          SERIAL PRIMARY KEY,
    email       VARCHAR(255) NOT NULL,
    anfrage     TEXT         NOT NULL,
    erstellt_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
