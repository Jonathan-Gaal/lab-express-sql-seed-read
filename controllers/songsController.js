const express = require("express");
const { all } = require("../app");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
} = require("../queries/songs");
const { checkTitle, checkBoolean } = require("../validations/checkSongs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (!song.message) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

songs.post("/", checkTitle, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

module.exports = songs;
