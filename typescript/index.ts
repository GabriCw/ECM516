class Empregado{
    private static numeroTotal: number = 0;

    constructor(
        private primeiroNome: string,
        private sobrenome: string,
    ){
        Empregado.numeroTotal++;
    }

    public static obterNumeroTotal(): number{
        return Empregado.numeroTotal;
    }
}
let e1: Empregado = new Empregado('Ana', 'Maria')
let e2: Empregado = new Empregado('João', 'Silva')
console.log(e1, e2, Empregado.obterNumeroTotal())


// class Pessoa{
//     private cpf: string;
//     readonly idade: number;

//     constructor(cpf: string, idade: number){
//         this.cpf = cpf;
//         this.idade = idade;
//     }

//     public getCpf(): string{
//         return this.cpf;
//     }

//     public setCpf(cpf: string): void{
//         this.cpf = cpf;
//     }

//     // public setIdade(idade: number): void{
//     //     this.idade = idade;
//     // }
// }

// let p : Pessoa = new Pessoa('1234', 18)
// console.log(p)
// p.setCpf('887')
// console.log(p)


// class Estudante{
//     private nome: string | undefined;

//     constructor(nome?: string){
//         this.nome = nome;
//     }

//     exibir(): void{
//         console.log(this.nome);
//     }
// }
// console.log(new Estudante())

// class EstudanteEspecial extends Estudante{
//     constructor(nome: string){
//         super(nome);
//     }
// }

// console.log(new EstudanteEspecial('Ana'))

// interface IEstudante{
//     id: number;
//     nome: string;
//     // formando?: boolean;
// }

// function exibirEstudante(e: IEstudante){
//     console.log(e)
// }

// const e1 = {id: 1, nome: 'Ana', formando: true}
// const e2 = {id: 2, nome: 'João'}
// exibirEstudante(e1)
// exibirEstudante(e2)


// function obterMedia(...a: number[]): number{
//     let total = 0;
//     for(let i = 0; i < a.length; i++){
//         total += a[i];
//     }
//     return total/(a.length === 0? 1 : a.length);
// }

// console.log(obterMedia())
// console.log(obterMedia(1))
// console.log(obterMedia(1, 2, 3, 4, 5))
// // console.log(obterMedia([1, 2]))

// // class Calculadora{
// //     int somar(int... numeros){
// //         int res = 0;
// //         for(int a : numeros){
// //             res += a;
// //         }
// //         return res;
// //     }
// // }


// function obterMedia(a: number, b: number, c?: number){
//     return (a + b + (c === undefined? 0 : c)) / (c === undefined? 2 : 3)
// }

// // class Calculadora{
// //     int somar(int a, int b){
// //         return a + b;
// //     }

// //     int somar(int a, int b, int c){
// //         return a + b + c;
// //     }
// // }

// console.log(obterMedia(2, 3))
// console.log(obterMedia(2, 3, 4))


// let pessoa = function(idade: number){
//     this.idade = idade

//     this.fazerAniversario = function(){
//         this.idade++
//         console.log(this.idade)
//     }

//     this.fazerAniversarioComArrowFunction = () => {
//         this.idade++
//         console.log(this.idade)
//     }
// }

// let p = new pessoa(1)
// setTimeout(p.fazerAniversario, 100)
// setTimeout(p.fazerAniversarioComArrowFunction, 100)  


// //declaração de variáveis
// //var, let, const
// let n: number
// n = 2
// console.log(n)


// console.log('oi')