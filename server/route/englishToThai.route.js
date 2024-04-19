const express = require("express");

const { englishToThai } = require("../controller/englishToThai.controller.js");

const router = express.Router();

router.post("/english-thai", englishToThai);

module.exports = router;
