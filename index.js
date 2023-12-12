const express = require("express");
const data = require("./data");

const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

console.log("DATA ", data);

//NEWS ARTICLE---------------------------
app.get("/api/articles", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
