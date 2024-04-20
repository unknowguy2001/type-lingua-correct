const fs = require("fs");

const rawData = fs.readFileSync("./model/data.json");

const getValueByKey = (data, wordToFind) => {
  return data[wordToFind];
};

const thaiToEnglish = (req, res) => {
  const input = req.body.inputData;

  let englishWords = "";

  const data = JSON.parse(rawData);

  for (const character of input) {
    if (character == " ") {
      englishWords += " ";
      continue;
    }
    englishWords += getValueByKey(data, character);
  }

  return res.status(200).json({ data: englishWords });
};

module.exports = thaiToEnglish;
