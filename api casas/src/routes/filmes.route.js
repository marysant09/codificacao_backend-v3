import express from 'express'
import { filmeService } from '../services/filmesService.js';
const router = express.Router();


// GET ALL
router.get('/', (req, res) => {
  const filmes = filmeService.getAll()
  res.json(filmes);
});

// GET BY ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmeService.getById(id)

  if (!filme) {
    return res.status(404).json({ mensagem: "Filme não encontrado" });
  }

  res.json(filme);
});

export default router