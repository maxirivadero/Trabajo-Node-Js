const { Op } = require("sequelize");
const { Libro, Libreria, Libro } = require("../models");

const createLibro = async (libroOptions) => {
  try {
    const newLibro = await Libro.create(libroOptions);
    return newLibro;
  } catch (error) {
    throw error;
  }
};

const getLibro = async (id) => {
  try {
    const libro = await Libro.findByPk(id, { include: [{ all: true }] });
    if (libro) {
      return libro;
    } else {
      throw new Error("Libro no encontrado");
    }
  } catch (error) {
    throw error;
  }
};

const getLibros = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const libros = await Libro.findAll(options);

    if (libros) {
      return libros;
    } else {
      throw new Error(
        "No se encontraron libros con ese criterio de busqueda"
      );
    }
  } catch (error) {
    throw error;
  }
};

const updateLibro = async (libroId, userOptions) => {
  try {
    await getLibro(libroId);
    const [numRowsUpdated] = await Libro.update(userOptions, {
      where: { id: libroId },
    });
    console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
    return Libro.findByPk(libroId);
  } catch (error) {
    throw error;
  }
};


const deleteLibro = async (libroId) => {
  try {
    return Libro.destroy({ where: { id: libroId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createLibro,
  getLibro,
  getLibros,
  updateLibro,
  deleteLibro,
};