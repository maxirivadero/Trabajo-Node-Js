/*
Routes: contiene archivos que definen las rutas para cada endpoint de la API.Estos archivos
definen las funciones que se ejecutarán cuando se solicita una ruta específica. Cada archivo de
ruta puede definir una serie de rutas y los controladores asociados, que se ejecutarán cuando
se accede a una ruta específica. Además, se pueden agrupar archivos de ruta en subcarpetas
para mejorar la organización y la legibilidad del código.


*/

const userRouter = require("./user");
const authRouter = require("./auth");
const libreriaRouter = require("./libreria");
const libroRouter = require("./libro");

module.exports = { userRouter, authRouter, libreriaRouter, libroRouter};
