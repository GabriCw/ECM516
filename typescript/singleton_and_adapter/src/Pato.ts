export interface Pato{
    quack(): void;
    fly(): void;
}

export interface Peru{
    fly(): void;
    gobble(): void;
}

export interface BemTeVi{
    fly(): void;
    BemTeVi(): void;
}

export class BemTeViAdapter implements Pato{
    constructor(private bemTeVi: BemTeVi){}
    fly(): void {
        this.bemTeVi.fly();
    }
    quack(): void {
        this.bemTeVi.BemTeVi();
    }
}

export class PeruAdapter implements Pato{
    // private peru: Peru;
    // constructor(peru: Peru){
    //     this.peru = peru;
    // }
    constructor(private peru: Peru){}
    fly(): void {

    }
    quack(): void {
        this.peru.gobble();
    }
}

export class BemTeViDeSP implements BemTeVi{
    fly(): void {
        console.log('BemTeVi de SP voando...');
    }
    BemTeVi(): void {
        console.log('BemTeVi de SP falando...');
    }

}

export class PeruDoMato implements Peru{
    fly(): void {
        console.log('Peru do Mato voando...');
    }
    gobble(): void {
        console.log('Peru do Mato falando...');
    }
}

export class PatoBranco implements Pato{
    fly(): void {
        console.log('Pato Branco voando...');
    }
    quack(): void {
        console.log('Pato Branco falando...');
    }
}

export class PatoDoSul implements Pato{
    fly(): void {
        console.log('Pato do Sul voando...');
    }
    quack(): void {
        console.log('Pato do Sul falando...');
    }
}