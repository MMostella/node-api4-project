const express = require("express");
const User = require("./users/model");

const server = express();

server.use(express());

server.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
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

module.exports = server;
