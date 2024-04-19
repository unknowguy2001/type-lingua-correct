const fs = require("fs");

const rawData = fs.readFileSync("./model/data.json");

const getKeyByValue = (data, value) => {
  return Object.keys(data).find((key) => data[key] === value);
};

const getAllData = async (req, res) => {
  const data = JSON.parse(rawData);
  let test = getKeyByValue(data, "ฉ");

  res.status(200).json({ data });
};

const englishToThai = (req, res) => {
  const input = req.body.inputData;
  console.log(req.body);

  let thaiWords = "";
  const data = JSON.parse(rawData);

  for (const character of input) {
    thaiWords += getKeyByValue(data, character);
  }

  return res.status(200).json({ data: thaiWords });
};

module.exports = { getAllData, englishToThai };
