const express = require("express");

const {
  getAllData,
  englishToThai,
} = require("../controller/englishToThai.controller.js");

const router = express.Router();

router.get("/english-thai", getAllData);
router.post("/english-thai", englishToThai);

module.exports = router;
