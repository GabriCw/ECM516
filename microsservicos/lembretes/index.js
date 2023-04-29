require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())

let id = 0
const lembretes = {}

//POST localhost:4000/lembretes {"texto": "Fazer Café"}
app.post("/lembretes", (req, res) => {
  const texto = req.body.texto
  id++
  lembretes[id] = {id, texto}
  res.status(201).json(lembretes[id])
})

//GET localhost:4000/lembretes
app.get("/lembretes", (req, res) => {
  res.send(lembretes) 
})

const PORT = process.env.PORT || 4000
app.listen(PORT || 4000, () => console.log(`Lembretes. Porta ${PORT}`))