const userProvider = require("../providers/userProvider");

const getUser = async (id) => {
  return await userProvider.getUser(id);
};

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

module.exports = { getUser, createUser };
