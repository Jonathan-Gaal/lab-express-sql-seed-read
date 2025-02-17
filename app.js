// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");
// Bookmarks ROUTES
const songsController = require("./controllers/songsController");

// CONFIGURATION

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Songs App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
