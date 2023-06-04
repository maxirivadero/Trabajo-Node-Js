const express = require("express");
const libroService = require("../services/libro");
const router = express.Router();
const { authIsAdmin } = require("../middleware/authentication-jwt");

router.get("/:libroId", async (req, res) => {
  const libroId = req.params.libroId;
  try {
    const libro = await libroService.getLibro(libroId);
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const { isbn, titulo, autor, year,library } = req.query;
  try {
    let libros;
    if (Object.keys(req.query).length !== 0) {
      libros = await libroService.getLibros({
        ...(isbn && { isbn }),
        ...(titulo && { titulo }),
        ...(autor && { autor }),
        ...(year && { year }),
        ...(library && { library }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      libros = await libroService.getLibros();
    }

    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/",  async (req, res) => {
  const { isbn, titulo, autor, year,library } = req.body;
  try {
    const newLibro = await libroService.createLibro({
      isbn,
      titulo,
      autor,
      year,
      library,
      LibreriumId: library
    });
    res.status(201).json(newLibro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:libroId",  async (req, res) => {
  const libroId = req.params.libroId;
  const { isbn, titulo, autor, year,library } = req.body;
  try {
    const newLibro = await libroService.updateLibro(libroId, {
      isbn,
      titulo,
      autor,
      year,
      library,
    });
    res.status(200).json(newLibro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:libroId", async (req, res) => {
  const libroId = req.params.libroId;
  try {
    const libro = await libroService.deleteLibro(libroId);
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
