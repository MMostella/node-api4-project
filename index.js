// require("dotenv").config();
// const cors = require("cors");
// const path = require("path");
const User = require("./api/users/model");
const express = require("express");
const server = express();

// server.use(cors());
server.use(express.json());
// server.use(express.static(path.join(__dirname, "client/build")));

server.get("/", (req, res) => {
  res.send(`<h1>Hello There!</h1>`);
});

server.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: `The users info could not be found`,
    });
  }
});

server.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "provide name and bio",
      });
    } else {
      const newUser = await User.insert({ username, password });
      res.status(201).json(newUser);
    }
  } catch (err) {
    res.status(500).json({
      message: "There was an error while saving the user to the database",
    });
  }
});

server.post("/api/login", async (req, res) => {
  try {
    if (!req.body.name.trim() || !req.body.password.trim()) {
      res.status(404).json({
        message: `User not found`,
      });
    } else {
      res.send(`Hello There, ${req.body.name}!`);
    }
  } catch (err) {
    res.status(500).json({
      message: "There was an error while saving the user to the database",
    });
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
