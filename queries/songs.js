const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getOneSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE ID=$1", id);
    return oneSong;
  } catch (err) {
    return err;
  }
};

//ALTERNATE SYNTAX
// await db.one("SELECT * FROM bookmarks WHERE id=$[id]", {
//   id: id,
// });

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (title, artist, genre, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
      [song.title, song.artist, song.genre, song.is_favorite]
    );
    return newSong;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllSongs, getOneSong, createSong };
