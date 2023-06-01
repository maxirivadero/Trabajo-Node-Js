const express = require("express");
const libroService = require("../services/libro");
const router = express.Router();
const { authIsAdmin } = require("../middleware/authentication-jwt");

router.get("/:libroId", async (req, res) => {
  const reqLibro = req.libro;
  const libroId = req.params.libroId;
  try {
    const libro = await libroService.getlibro(libroId);
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const { nombre, email } = req.query;
  try {
    let users;
    if (Object.keys(req.query).length !== 0) {
      users = await userService.getUsers({
        ...(nombre && { nombre }),
        ...(email && { email }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      users = await userService.getUsers();
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Usarla para crear un nuevo libro en la libreria
router.post("/", async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  try {
    const newUser = await userService.createUser({
      nombre,
      apellido,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { nombre, apellido, email, password } = req.body;
  try {
    const newUser = await userService.updateUser(userId, {
      nombre,
      apellido,
      email,
      password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:userId", authIsAdmin, async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userService.deleteUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
