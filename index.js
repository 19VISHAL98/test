const express = require("express");
const app = express();

require('./addNumber')
require('./countWord')
require("dotenv").config();
const PORT = process.env.PORT;

// 1. task

app.get("/", (req, res) => {
  return res.status(200).send("Hello, World!");
});

app.listen(PORT, () => console.log(`server is running on the ${PORT}`));