require("dotenv").config()

const express = require("express")
const axios = require("axios")
const app = express()

app.use(express.json())

let id = 0
const lembretes = {}

//POST localhost:4000/lembretes {"texto": "Fazer Café"}
app.post("/lembretes", (req, res) => {
  const texto = req.body.texto
  id++
  lembretes[id] = {id, texto}
  axios.post(
    "http://barramento-de-eventos-service:10000/eventos", {
      tipo: "LembreteCriado",
      dados: {id: id, texto: texto}
    })
  res.status(201).json(lembretes[id])
})

//GET localhost:4000/lembretes
app.get("/lembretes", (req, res) => {
  res.send(lembretes) 
})

app.post("/eventos", (req, res) => {
  try{
    console.log(req.body)
  }
  catch(e){

  }
  res.status(200).json({msg: "ok"})
})
const PORT = process.env.PORT || 4000
app.listen(PORT || 4000, () => {
  console.log('Nova versão')
  console.log('Agora usando Docker Hub')
  console.log(`Lembretes. Porta ${PORT}`)
})