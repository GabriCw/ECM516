//const, let, var

//------------------------------------------
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1+ n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
//console.log(n4)
//------------------------------------------

//------------------------------------------
// var idade = 18
// console.log("Oi, " + nome)
// if (idade >= 18){
// 	var nome = "João" //içamento (hoist)
// 	console.log(nome + ", você pode dirigir")
// }
// console.log("Até mais, " + nome)
//------------------------------------------

//------------------------------------------
// var linguagem = "Javascript"
// console.log("Aprendendo" + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo" + linguagem)
//------------------------------------------

//------------------------------------------
// var endereco = "Rua C"
// console.log(endereco)
// endereco = "Rua B"
// console.log(endereco)
// console.log(typeof(endereco))
//------------------------------------------

//------------------------------------------
// let a = 2
// let b = "abc"
// console.log(typeof(b))
// b = 12
// console.log(typeof(b))
// b = true
// console.log(typeof(b))
//------------------------------------------

//------------------------------------------
// const nome1 = "Ana"
// const nome2 = 'Pedro'
// const nome3 = 'José'

// console.log(typeof(nome1))
// console.log(typeof(nome2))
// console.log(typeof(nome3))
//------------------------------------------

//REPL: Read, Evaluate, Print, Loop

//------------------------------------------
//Vetores

// function soma(a, b){
//   return a + b
// }

// console.log(soma(2, 3))

//v = [2, 'abc', true]

// v1 = []
// v1[0] = 3.4
// v1[10] = 2

// console.log(v1)
// for (let i = 0; i < v1.length; i++)
//   console.log(v1[i])
//------------------------------------------

//------------------------------------------
//Método filter

  //arrow function
  //const teste =() => {console.log("minha arrow function")}
  //teste()

// const nomes = ["Ana Maria", "Antônio", "Rodrigo", "Alex", "Cristina"]
// const resultado = nomes.filter((nome) => {return nome.startsWith("A")})
// console.log(resultado)
//------------------------------------------

//------------------------------------------
//Mapeamento

//["Ana", "Pedro"] => ["A", "P"]
// const nomes = ["Ana Maria", "Antônio", "Rodrigo", "Alex", "Cristina"]
// const letrasIniciais = nomes.map((nome) => {return nome.charAt(0)})
// console.log(letrasIniciais)

// const numeros = [1, 2, 3, 4, 5]
// //[1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
// const multNumeros = numeros.map((numero) => {return numero**2})
// console.log(multNumeros)
//------------------------------------------

//------------------------------------------
//função reduce

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)
//------------------------------------------

//------------------------------------------
//Funções

// function hello(){
//   console.log("Hello")
// }
// hello()

// function hello(nome){
//   console.log("Hello" + nome)
// }
// hello("Flavia")

// function soma(a, b){
//   return a + b 
// }
// console.log(soma(2, 3))

// const dobro = function(n){
//   return 2*n
// }
// const res = dobro(5)
// console.log(res)

//valor padrão para um parâmetro
// const triplo = function(n = 5){
//   return n*3
// }
// console.log(triplo())
// console.log(triplo(7))
//------------------------------------------

//------------------------------------------
//Arrow functions

//a => {console.log(a)}
//(a, b) => console.log(a + b) //syntax sugar
//const teste = (a, b, c) => a*b*c

// const hello = () => console.log("Hello")
// console.log(hello())

// const dobro = valor => valor*2
// console.log(dobro(2))

//const ehPar = (n) => {return n % 2 === 0}
//console.log(ehPar(3))

//------------------------------------------
//closures

// let umaFuncao = function () {
//   console.log("Fui armazenada em uma variável")
// }

// umaFuncao()

//função de alta ordemm (higher order function)

// function f (funcao){
//   funcao()
// }

// f(function () {
//   console.log("Estou sendo passado para f")
// })

//função de alta ordemm (higher order function)

// function g (){
//   function outraFuncao(){
//     console.log("Fui criada por g")
//     return function(){
//       console.log("Até Logo")
//     }
//   }
//   return outraFuncao
// }

// const gResult = g()
// gResult() 
//as linhas 191 e 192 são equivalentes a : g()()

// f(g()) // chama o return de g (outraFuncao())
// f(g()()) //chama o retorno de outraFuncao (function())

// function f (){
//   let nome = "Joao"
//   function g(){
//     let a
//     console.log(nome)
//   }
//   g()
// }
// f()

// function saudacoesFactor(saudacao, nome) {
//   return function(){
//     console.log(saudacao + ", " + nome)
//   }
// }

// let olaJoao = saudacoesFactor("Olá", "João")
// let tchauJoao = saudacoesFactor("Tchau", "João")

// olaJoao()
// tchauJoao()

// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(cont)
//   }
//   cont++
//   function f2(){
//     console.log(cont)
//   }
//   return {f1, f2} //só aqui o valor cont está sendo vinculado em f1 e f2
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
//------------------------------------------

//------------------------------------------
//objetos literais JavaScript (JSON)

//uma pessoa que se chama João e tem 17 anos

// let pessoa = {
//   nome: "João",
//   idade: 17
// }
// //para acessar esses valores se usa : . e [""]
// console.log(pessoa.nome)
// console.log(pessoa["idade"])

//uma pessoa que se chama Maria, tem 21 anos e mora na Rua B, 121

// let pessoa = {
//   nome: "Maria",
//   idade: 21,
//   endereco: {
//     rua: "Rua B",
//     numero: 121
//   }
// }
// console.log(pessoa["nome"])
// console.log(pessoa["idade"])
// console.log(pessoa["endereco"])
// console.log(pessoa["endereco"]["rua"])

//uma concessionária tem CNPJ e endereço (rua e número). 
//ela possui 3 veículos no seu estoque, cada um tem modelo, marca e ano de fabricação

let concessionaria = {
  CNPJ: "11.235.234/0001.23",
  endereco: {
    rua: "Rua B",
    numero: 121
  },
  veiculos:{
    carro1: {
      modelo:"Ka",
      marca: "Ford",
      ano: 2020
    },
    carro2: {
      modelo:"Strada",
      marca: "Fiat",
      ano: 2020
    },
    carro3: {
      modelo:"HB20",
      marca: "Hyundai",
      ano: 2020
    }
  }
}
// console.log(concessionaria["CNPJ"])
// console.log(concessionaria["endereco"])
// console.log(concessionaria["veiculos"])
// console.log(concessionaria["veiculos"]["carro3"])

let concessionaria2 = {
  CNPJ: "11.235.234/0001.23",
  endereco: {
    rua: "Rua B",
    numero: 121
  },
  veiculos:[
    {
      modelo:"Ka",
      marca: "Ford",
      ano: 2020
    },
    {
      modelo:"Strada",
      marca: "Fiat",
      ano: 2020
    },
    {
      modelo:"HB20",
      marca: "Hyundai",
      ano: 2020
    }
  ]
}
for( let veiculo of concessionaria2.veiculos){
  console.log(veiculo)
}

//calculadora que soma dois valores e subtrair um valor do outro

let calc = {
  soma: (a,b) => a + b,
  subtracao: function(a,b){
    return a - b
  }
}
console.log(calc.soma(2,3))
//------------------------------------------
