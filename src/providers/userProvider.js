const { Op } = require("sequelize");
const { User } = require("../models");

const createUser = async (userOptions) => {
  try {
    const newUser = await User.create(userOptions);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findByPk(id, { include: [{ all: true }] });
    if (user) {
      return user;
    } else {
      throw new Error("Usuario no encontrado");
    }
  } catch (error) {
    throw error;
  }
};

const validateUser = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email, password },
    });
    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  validateUser,
};
