class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' ja ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' ja desligado')
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome); //linkar com a classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')

console.log(s1)