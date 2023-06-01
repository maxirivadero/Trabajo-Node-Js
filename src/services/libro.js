const libroProvider = require("../providerslibroProvider");

const getLibro = async (id) => {
  return await libroProvider.getLibro(id);
};

const getLibros = async (options) => {
  return await libroProvider.getLibros(options);
};

const createLibro = async (libro) => {
  return await libroProvider.createLibro(libro);
};

const updateLibro = async (id, libro) => {
  return await libroProvider.updateLibro(id, libro);
};

const deleteLibro = async (id) => {
  return await libroProvider.deleteLibro(id);
};

const queryUser = (name) => {};

module.exports = { getLibro, getLibros, createLibro, updateLibro, deleteLibro };
