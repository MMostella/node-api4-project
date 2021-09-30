const express = require("express");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Mason" }]);
});

server.post("/api/register", (req, res) => {
  //   const User =
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
