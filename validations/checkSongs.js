const checkTitle = (req, res, next) => {
  if (req.body.title) {
    next();
  } else {
    res.status(400).json({ error: "Title is required" });
  }
};

// we dont necessarily need to check for null value for boolean since a frontend wont typically allow null, if its not a required field a val for the boolean will either be present or undefined
const checkBoolean = (req, res, next) => {
  if (
    typeof req.body.is_favorite === "boolean" ||
    req.body.is_favorite === undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.video_url.slice(0, 7) === "http://" ||
    req.body.video_url.slice(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https//` });
  }
};

module.exports = { checkTitle, checkBoolean, validateURL };
