\c songs_dev;

INSERT INTO songs (title, artist, genre, video_url, is_favorite) 
VALUES ('Wating For Love', 'Avicii', 'EDM', 'https://www.youtube.com/watch?v=cHHLHGNpCSA', TRUE),
('Yellow Trotter', 'Huun Huur Tu', 'Tuvan Throat Singing', 'https://www.youtube.com/watch?v=M0oWJPL-X2k',TRUE),
('Praise to the Lord the Almighty', 'Westminster Abbey Choir', 'Hymns', 'https://www.youtube.com/watch?v=lXhxbEjfxxc', TRUE),
('Dont Stop Believin', 'Journey', '80s Rock','https://www.youtube.com/watch?v=1k8craCGpgs', TRUE),
('Disco Duck', 'Rick Dees and his Cast of Idiots', 'Disco', 'https://www.youtube.com/watch?v=i_WEMCUhF0E', TRUE), 
('White Christmas', 'Bing Crosby', 'Crooning', 'https://www.youtube.com/watch?v=v5ryZdpEHqM', False);



INSERT INTO comments (song_id, commenter, comment, rating )
VALUES
('1', 'Jon', 'This song rox beyond belief!', 5),
('2', 'Jon', 'As an amateur throat singer, I can say this is one of the best examples ive ever heard.', 3),
('3', 'Evan', 'Westminster Abbey choir at its finest!', 5),
('2', 'Jesse', 'A musician buddy of mine sugested I watch some overtone singin and reccomended this video. Amazing concept, but not my favorite thing ever.', 2),
('4', 'David', 'How do they hit those high notes?!?!', 4),
('5', 'Mr. Magoo', 'This takes me back! Dumb song, but so fun to listen and dance to!', 3),
('8', 'Jon', 'Discoved this song the other night, so kool, love the song , lyrics and the dynamic guitar background!', 4),
('7', 'Hannah', 'WHOOOHOOO!!! <3 Asia!!!', 4),
('6', 'Gabi', 'Wow ol blue eyes, you can fly me to the moon anytime!', 5);