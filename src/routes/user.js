const express = require("express");
const userService = require("../services/user");
const router = express.Router();
const { authIsAdmin } = require("../middleware/authentication-jwt");

router.get("/:userId", async (req, res) => {
  const reqUser = req.user;
  const userId = req.params.userId;
  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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



module.exports = router;
