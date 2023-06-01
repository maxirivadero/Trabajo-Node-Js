const express = require("express");
const libreriaService = require("../services/libreria");
const router = express.Router();
const { authIsAdmin } = require("../middleware/authentication-jwt");

router.get("/:libreriaId", async (req, res) => {
  const libreriaId = req.params.libreriaId;
  try {
    const libreria = await libreriaService.getlibreria(libreriaId);
    res.status(200).json(libreria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const { name, location, telefono } = req.query;
  try {
    let librerias;
    if (Object.keys(req.query).length !== 0) {
      librerias = await libreriaService.getLibrerias({
        ...(name && { name }),
        ...(location && { location }),
        ...(telefono && { telefono }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      librerias = await libreriaService.getLibrerias();
    }

    res.status(200).json(librerias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/", authIsAdmin,  async (req, res) => {
  const { name, location, telefono } = req.body;
  try {
    const newLibreria = await libreriaService.createLibreria({
      name,
      location,
      telefono,
    });
    res.status(201).json(newLibreria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:libreriaId", authIsAdmin,  async (req, res) => {
  const libreriaId = req.params.libreriaId;
  const { name, location, telefono } = req.body;
  try {
    const newLibreria = await libreriaService.updateLibreria(libreriaId, {
      name,
      location,
      telefono,
    });
    res.status(200).json(newLibreria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:libreriaId", authIsAdmin, async (req, res) => {
  const libreriaId = req.params.libreriaId;
  try {
    const libreria = await libreriaService.deleteLibreria(libreriaId);
    res.status(200).json(libreria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
