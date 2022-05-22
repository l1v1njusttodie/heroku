const express = require("express");
const router = express.Router();

const PORT = process.env.PORT || 80

let path = require("path");
router
    .route("/")
    .get((req, res) => res.render(path.resolve("index.ejs")))
    .post((req, res) => res.send("POST"))
module.exports = router;

