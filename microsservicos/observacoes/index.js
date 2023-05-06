require("dotenv").config()

const express = require('express')
const {v4:uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

app.get('/lembretes/:id/observacoes', (req, res) => {
  res.json(observacoesPorLembreteId[req.params.id] || [])
})

//observação: {texto: "Whatever"}
app.post('/lembretes/:id/observacoes', (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
  observacoesDoLembrete.push({id: idObs, texto})
  observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
  res.status(201).json(observacoesDoLembrete)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Observações. Porta ${PORT}`))