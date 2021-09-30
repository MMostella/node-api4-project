const { nanoid } = require("nanoid");

const getId() {
    return nanoid().slice(0, 5)
}

const initialUsers = () => {
  [
    { id: getId(), username: "Mason", password: '123' },
    { id: getId(), username: "Allison", password: '123' },
  ];
};

let users = initialUsers();

const find = () => {
    return Promise.resolve(users);
};

const insert = ({ username, password }) => {
    const newUser = { id: getId(), username, password };
    users.push(newUser);
    return Promise.resolve(newUser);
};

module.exports = {
    find,
    insert,
}