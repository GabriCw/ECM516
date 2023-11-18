import { Pato, PatoBranco, PatoDoSul, PeruDoMato, PeruAdapter, BemTeViDeSP, BemTeViAdapter } from "./Pato";

const testesAvesBom = (): void => {
    let aves: Pato[] = [];
    aves.push(new PatoBranco());
    aves.push(new PatoDoSul());
    aves.push(new PeruAdapter(new PeruDoMato()));
    aves.push(new BemTeViAdapter(new BemTeViDeSP()));
    for (let ave of aves){
        ave.fly();
        ave.quack();
    }

}

testesAvesBom();

// const testeAvesRuim = (): void => {
//     let aves: any[] = [];
//     aves.push(new PatoBranco());
//     aves.push(new PatoDoSul());
//     aves.push(new PeruDoMato());
//     for (let ave of aves){
//         ave.fly();
//         if (ave instanceof PatoBranco || ave instanceof PatoDoSul)
//             ave.quack();
//         else if (ave instanceof PeruDoMato)
//             ave.gobble();
//     }
// }

// testeAvesRuim();

// import { CacheService } from "./CacheService";

// const cache = CacheService.getInstance();
// cache.set('João', '123456');
// console.log(cache.get('João'));

// import Singleton from "./Singleton";

// for (let i = 0; i < 10; i++) {
//     let singleton: Singleton = Singleton.getInstance();
//     singleton.executar();
// }