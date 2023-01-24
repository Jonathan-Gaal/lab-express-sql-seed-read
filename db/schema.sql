DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT, 
    genre VARCHAR(100),
    video_url TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS comments;


CREATE TABLE comments (
 id SERIAL PRIMARY KEY,
 commenter VARCHAR(100),
 comment TEXT,
 rating INT, CHECK (rating >= 0 AND rating <= 5),
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);