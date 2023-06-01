const { Op } = require("sequelize");
const { User, Libreria, Libro } = require("../models");

//Terminar
const createLibreria = async (libreriaOptions) => {
  try {
    const newLibreria = await Libreria.create(libreriaOptions);
    return newLibreria;
  } catch (error) {
    throw error;
  }
};



module.exports = {
  createLibreria,
  getLibreria,
  getLibrerias,
  updateLibreria,
  deleteLibreria,
};