const express = require("express");
const path = require("path");
const rootdir = require("../utils/path");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "store.html"));
});

module.exports = router;
