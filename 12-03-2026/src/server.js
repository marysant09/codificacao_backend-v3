const express = require('express')
const app = express()
const port = 3000

let alunos= [
  { id: 1, nome: "Edio", idade: 35 },
  { id: 2, nome: "Vanessa", idade: 52 },
  { id: 3, nome: "Schuster", idade: 13 }
]

// GET - buscar alunos por id




app.get('/alunos/:id', (req, res) => {
const id = parseInt(req.params.id)
const aluno = alunos.find(a => a.id === id)
if (!aluno) {
  return res.status(404).json({
    success: false,
    message: 'Aluno não encontrado'
  })
}
res.json({
  success: true,
  data: aluno
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Post - criar um novo aluno
app.post('/alunos', (req, res) => {
  const { nome, idade } = req.body
 if (!nome || !idade) {
  return res.status(400).json({
    success: false, 
    message: 'Nome e idade são obrigatórios'
  })
}
const newAluno = {
  id: alunos.length + 1,
  nome, 
  idade }

  alunos.push(newAluno)  
  res.status(201).json({
    success: true,
    data: newAluno,
    message: 'certo'

  })  
 })