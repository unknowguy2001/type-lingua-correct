const express = require("express");
const cors = require("cors");
const englihToThaiRoute = require("./route/englishToThai.route.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", englihToThaiRoute);

app.listen(3001, () => {
  console.log("http://localhost:3001");
});
