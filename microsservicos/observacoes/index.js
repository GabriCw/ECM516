require("dotenv").config()

const express = require('express')
const axios = require('axios')
const {v4:uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const funcoes = {
  ObservacaoClassificada: (observacao) => {
    //1. buscar a obs na base local
    const observacoes = observacoesPorLembreteId[observacao.lembreteId]
    const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
    //2. atualizar o status da obs na base local
    obsParaAtualizar.status = observacao.status
    //3. emitir um evento do tipo ObservacaoAtualizada contendo a obs atualizada
    axios.post('http://barramento-de-eventos-service:10000/eventos', {
      tipo: "ObservacaoAtualizada",
      dados: {
        id: observacao.id,
        texto: observacao.texto,
        lembreteId: observacao.lembreteId,
        status: observacao.status
      }
    })
  }
}

const observacoesPorLembreteId = {}

app.get('/lembretes/:id/observacoes', (req, res) => {
  res.json(observacoesPorLembreteId[req.params.id] || [])
})

//observação: {texto: "Whatever"}
app.post('/lembretes/:id/observacoes', async (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = 
        observacoesPorLembreteId[req.params.id] || []
        observacoesDoLembrete.push({
          id: idObs, 
          texto,
          status: "aguardando"
        })
        observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
  await axios.post('http://barramento-de-eventos-service:10000/eventos', {
    tipo: "ObservacaoCriada",
    dados: {
      id: idObs, 
      texto, 
      lembreteId: req.params.id,
      status: "aguardando"
    }
  })
  res.status(201).json(observacoesDoLembrete)
})

app.post('/eventos', (req, res) => {
  try{
    console.log(req.body)
    funcoes[req.body.tipo](req.body.dados)
  }
  catch(e){

  }
  res.status(200).send({msg: "ok"})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Observações. Porta ${PORT}`))