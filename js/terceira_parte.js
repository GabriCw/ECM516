// console.log("Eu primeiro....")
// console.log("Agora eu....")
// console.log("Sempre vou ser a última....")]

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// function demorada(){
//   const atualMais2Segundos = new Date().getTime() + 2000
//   while (new Date().getTime() <= atualMais2Segundos);//no-op
//   const d = 8 + 4
//   return d
// }

// const a = 2 + 3
// const b = 5 + 9
// setTimeout(() => {
//   const d = demorada()
//   console.log("d: " + d)
// }, 0) //quando usa setTimeout ela é colocada em uma fila e sempre executa depois do script principal, não importa o tempo colocado 

// const e = 2 + a + b
// const dataMais10Segundos = new Date().getTime() + 10000
// while (new Date().getTime() <= dataMais10Segundos);
// console.log("e: " + e)

//-------------------------------------------------------
//inferno de callbacks
// const fs = require("fs")
// const abrirArquivo = (nomeArquivo) => {
//   const exibirConteudo = (erro, conteudo) => {
//     if(erro){
//       console.log("Erro:" + erro)
//     }
//     else{
//       console.log("Conteúdo: " + conteudo.toString())
//       const resultado = +conteudo.toString()*2 //+ transforma string pra número
//       const finalizar = (erro) => {
//         console.log(erro ? "Erro: " + erro : "Escrita ok") // condição ? v1(se tem a condição) : v2(se não tem a condição) 
//       }
//       fs.writeFile("dobro.txt", resultado.toString(), finalizar)
//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo("arquivo.txt")
//-------------------------------------------------------
//promises
function calculoDemorado(n){
  const p = new Promise(function(resolve, reject){
    let res = 0
    for(let i = 1; i <= n; i++) res += i
    resolve(res)
  })
  return p 
}
const minhaPromise = calculoDemorado(10)
minhaPromise.then((resultado) => {console.log(resultado)})


function calculoRapidinho(n){
  return Promise.resolve((n * (n+1)) / 2)
}
const pConcluida = calculoRapidinho(10)
pConcluida.then((res) => {console.log(res)})

//ex: reescrever a função calculoRapidinho sem usar o atalho Promise.resolve, ou seja, usando new Promise

function calculoRapidinho2(n){
  return new Promise(function(resolve, reject){
    let res = 0
    resolve((n*(n+1))/2)
  })
}
const pConcluida2 = calculoRapidinho2(10)
pConcluida2.then((res) => {console.log(res)})