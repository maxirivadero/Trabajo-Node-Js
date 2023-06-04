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

const getLibreria = async (id) => {
  try {
    const libreria = await Libreria.findByPk(id, { include: [{ all: true }] });
    if (libreria) {
      return libreria;
    } else {
      throw new Error("Libreria no encontrada");
    }
  } catch (error) {
    throw error;
  }
};

const getLibrerias = async (criteria) => {
  try {
    let options = { include: [{ all: true }] };
    if (criteria) {
      options = { ...options, where: { [Op.or]: criteria } };
    }
    const librerias = await Libreria.findAll(options);

    if (librerias) {
      return librerias;
    } else {
      throw new Error(
        "No se encontraron librerias con ese criterio de busqueda"
      );
    }
  } catch (error) {
    throw error;
  }
};

const updateLibreria = async (libreriaId, userOptions) => {
  try {
    await getLibreria(libreriaId);
    const [numRowsUpdated] = await Libreria.update(userOptions, {
      where: { id: libreriaId },
    });
    console.log(`Se actualizaron ${numRowsUpdated} filas en la DB`);
    return Libreria.findByPk(libreriaId);
  } catch (error) {
    throw error;
  }
};


const deleteLibreria = async (libreriaId) => {
  try {
    return Libreria.destroy({ where: { id: libreriaId } });
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