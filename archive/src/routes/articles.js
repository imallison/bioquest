const express = require("express");
const router = express.Router();
const { createArticle } = require("../controllers/articleController");

// Req to add new article
router.post("/", createArticle);

module.exports = router;
