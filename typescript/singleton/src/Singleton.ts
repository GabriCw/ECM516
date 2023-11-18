class Singleton{
    private static instance: Singleton | undefined;
    private constructor(){
        console.log("Contruiu uma instância")
    }

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public executar(): void{
        console.log('Executando Singleton');
    }
}

export default Singleton;