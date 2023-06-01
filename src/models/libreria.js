const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Libreria = sequelize.define("Libreria", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{paranoid:true, deletedAt: 'softDelete'});


module.exports = Libreria;
