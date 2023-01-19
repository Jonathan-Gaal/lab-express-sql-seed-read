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
      "INSERT INTO songs (title, artist, genre, video_url, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song.title, song.artist, song.genre, song.video_url, song.is_favorite]
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
      "UPDATE songs SET title=$1, artist=$2, genre=$3, video_url=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [
        song.title,
        song.artist,
        song.genre,
        song.video_url,
        song.is_favorite,
        id,
      ]
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
