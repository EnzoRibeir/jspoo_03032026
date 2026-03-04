import { Automovel } from "./auto.js"

export class Carro extends Automovel {
    constructor(marca = 'Desconhecida', modelo = 'Desconhecido', ano = null) {
        super(marca, modelo, ano)
    }

    descricao() {
        return `O carro é um ${this.getModelo()} da marca ${this.getMarca()} do ano ${this.getAno()}`
    }

    comprar() {
        return this.descricao()
    }

    static comprarNovo(marca, modelo, ano) {
        return new Carro(marca, modelo, ano)
    }
}

function main() {
    const meuCarro = Carro.comprarNovo("Volkswagen", "Fusca", 1980)
    console.log(meuCarro.descricao())
}

main()
