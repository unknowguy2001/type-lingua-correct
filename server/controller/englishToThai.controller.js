const fs = require("fs");

function getKeyByValue(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (key == value) {
      return object[key];
    }
  }
  return null;
}
const rawData = fs.readFileSync("./model/data.json");

const getAllData = async (req, res) => {
  const data = JSON.parse(rawData);
  let test = getKeyByValue(data, "ฉ");

  console.log(test);
  res.status(200).json({ data });
};

const englishToThai = async (req, res) => {
  const rawData = fs.readFileSync("./model/data.json");

  const input = req.body.input;

  for (const charactre of input) {
  }

  const data = JSON.parse(rawData);
};

module.exports = { getAllData };
