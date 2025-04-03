DROP TABLE IF EXISTS Games;

CREATE TABLE Games
(
    id          SERIAL PRIMARY KEY,
    titel       TEXT NOT NULL,
    description TEXT
);
