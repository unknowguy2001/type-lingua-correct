const express = require("express");
const cors = require("cors");
const englihToThaiRoute = require("./route/englishToThai.route.js");
const thaiToEnglish = require("./controller/thaiToEnglish.controller.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", englihToThaiRoute);
app.use("/api", thaiToEnglish);

app.listen(3001, () => {
  console.log("http://localhost:3001");
});
