require("dotenv").config();
const cors = require("cors");
const path = require("path");

const express = require("express");

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
