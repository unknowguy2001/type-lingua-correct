const express = require("express");

const thaiToEnglish = require("../controller/thaiToEnglish.controller.js");

const router = express.Router();

router.post("/thai-english", thaiToEnglish);

module.exports = router;
