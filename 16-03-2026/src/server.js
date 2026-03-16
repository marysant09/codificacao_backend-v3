const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let frutinhas= [
  { id: 1, nome: "Morango"  },
  { id: 2, nome: "Uva verde crok-crok" },
  { id: 3, nome: "Melancia" }
]

// GET - buscar frutinha por id
app.get('/frutinhas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const frutinha = frutinhas.find(f => f.id === id)

 if (!frutinha) {
    return res.status(404).json({
      success: false,
      message: 'Frutinha não encontrada'
    })
  }

 res.json({
    success: true,
    data: frutinha
  })
})

// POST - criar nova frutinha
app.post('/frutinhas', (req, res) => {
  const { nome } = req.body

  if (!nome) {
    return res.status(400).json({
      success: false,
      message: 'Nome é obrigatório'
    })
  }

  const newFrutinha = {
    id: frutinhas.length + 1,
    nome
  }

  frutinhas.push(newFrutinha)

  res.status(201).json({
    success: true,
    data: newFrutinha,
    message: 'Frutinha criada'
  })
})

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})