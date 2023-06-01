/*
Services: contiene archivos que encapsulan la lógica de negocio de la aplicación,
proporcionando una abstracción de alto nivel de las operaciones realizadas por los
controladores y otros componentes de la aplicación.El objetivo de la carpeta services es
separar la lógica de negocio de la lógica de controlador, lo que ayuda a mantener el controlador
simple y centrado en la gestión de solicitudes y respuestas HTTP, mientras que la lógica de negocio se separa en diferentes servicios que se pueden reutilizar en diferentes partes de la
aplicación.

logica de negocios: todas las reglas y operaciones que realize una operacion.
*/

const { getUser, createUser, updateUser, deleteUser } = require("./user");

module.exports = { getUser, createUser, updateUser, deleteUser };
