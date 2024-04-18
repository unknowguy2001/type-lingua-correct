const express = require("express");

const { getAllData } = require("../controller/englishToThai.controller.js");

const router = express.Router();

router.get("/thai-english", getAllData);

module.exports = router;
