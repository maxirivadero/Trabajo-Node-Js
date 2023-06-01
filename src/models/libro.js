const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Libreria = require("./libreria");

const Libro = sequelize.define("Libro", {
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  library: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{paranoid:true, deletedAt: 'softDelete'});

Libreria.hasMany(Libro);
Libro.belongsTo(Libreria,{ targetKey: 'library', foreignKey: 'id' });

module.exports = Libro;
