const express = require("express");
const path = require("path");
const rootdir = require("../utils/path");

const router = express.Router();

router.get("/add-products", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "add-products.html"));
  
});

router.post("/add-products", (req, res, next) => {
  //APP.POST is to access this url only in post method
  console.log(req.body);
  res.send("<h1>submitted</h1>");
});

module.exports = router;
