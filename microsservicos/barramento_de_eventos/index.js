require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const eventos = []

const PORT = process.env.PORT || 10000

//localhost:10000/eventos
app.post('/eventos', async (req, res) => {
  //{tipo: "lembreteCriado", dados: {id: 1, texto: "Fazer café"}}
  const evento = req.body
  eventos.push(evento)
  console.log(evento)
  //lembretes
  try{
    await axios.post('http://lembretes-clusterip-service:4000/eventos', evento)
  }catch(e){}
  
  //observações
  try{
    await axios.post('http://observacoes-clusterip-service:5000/eventos', evento)
  }catch(e){}

  //consulta
  try{
    await axios.post('http://consulta-clusterip-service:6000/eventos', evento)
  }catch(e){}

  //classificação
  try{
    await axios.post('http://classificacao-clusterip-service:7000/eventos', evento)
  }catch(e){}

  res.status(200).send({ msg: 'ok' })
})

app.get('/eventos', (req, res) => {
  res.json(eventos)
})

app.listen(
  PORT,
  () => console.log(`Barramento. ${PORT}.`)
)