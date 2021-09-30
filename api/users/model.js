const { nanoid } = require("nanoid");

function getId() {
  return nanoid().slice(0, 5);
}

const initialUsers = [
  { id: 1, username: "Mason", password: "123" },
  { id: 2, username: "Allison", password: "123" },
];

const find = () => {
  return Promise.resolve(initialUsers);
};

const insert = ({ username, password }) => {
  const newUser = { id: getId(), username, password };
  initialUsers.push(newUser);
  return Promise.resolve(newUser);
};

module.exports = {
  find,
  insert,
};
