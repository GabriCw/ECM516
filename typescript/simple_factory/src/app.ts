class Pato{}

class PatoReal extends Pato{}

class PatoDeCaca extends Pato{}

class PatoDeBorracha extends Pato{}

let ocasioes: string[] = [
  'piquenique', 'caça', 'banheira'
]

// function qualPato(string){}
function qualPato(ocasiao: string): Pato | null{
  let pato: Pato | null = null
  if(ocasiao === 'piquinique')
    pato = new PatoReal()
  else if(ocasiao === 'caça')
    pato = new PatoDeCaca()
  else if (ocasiao === 'banheira')
    pato = new PatoDeBorracha()
  return pato
}

console.log(qualPato(
  ocasioes[Math.floor(Math.random() * 3)]
))

// function teste(): void{
//   //indesejável
//   let pato: Pato = new Pato();
// }

// let hello: string = "Hello, Typescript"
// console.log(hello)
// new Pato()