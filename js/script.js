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

const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => {return ac + v})
console.log(soma)
//------------------------------------------
