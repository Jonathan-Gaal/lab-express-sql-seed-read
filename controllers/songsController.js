const express = require("express");
const { all } = require("../app");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const {
  checkTitle,
  checkBoolean,
  validateURL,
} = require("../validations/checkSongs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Not found" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (!song.message) {
    res.json(song);
  } else {
    res.status(404).json({ error: song.message });
  }
});

songs.post("/", checkTitle, checkBoolean, validateURL, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: song.message });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: song.message });
  }
});

songs.put("/:id", checkTitle, checkBoolean, validateURL, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (err) {
    res.status(404).json({ error: song.message });
  }
});

module.exports = songs;
