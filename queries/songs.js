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

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (err) {
    return err;
  }
};

const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET title=$1, artist=$2, genre=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
      [song.title, song.artist, song.genre, song.is_favorite, id]
    );
    return updatedSong;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
};
