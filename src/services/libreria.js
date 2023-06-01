const libreriaProvider = require("../providers/libreriaProvider");

const getLibreria = async (id) => {
  return await libreriaProvider.getLibreria(id);
};

const getLibrerias = async (options) => {
  return await libreriaProvider.getLibrerias(options);
};

const createLibreria = async (libreria) => {
  return await libreriaProvider.createLibreria(libreria);
};

const updateLibreria = async (id, libreria) => {
  return await libreriaProvider.updateLibreria(id, libreria);
};

const deleteLibreria = async (id) => {
  return await libreriaProvider.deleteLibreria(id);
};


module.exports = { getLibreria, getLibrerias, createLibreria, updateLibreria, deleteLibreria };
