// Usarla para crear un nuevo libro en la libreria
const agregarLibro =  async (req, res) => {
  const { isbn, titulo, autor, year, library } = req.body;
  try {
    const newLibro = await libreriaService.createUser({
      isbn,
      titulo,
      autor,
      year,
      library,
    });
    res.status(201).json(newLibro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {agregarLibro};