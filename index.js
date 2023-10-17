class Heroi { 
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque= ataque;
    }
  escrever(){
    console.log(`O herói ${this.nome}, tem a idade de ${this.idade} anos, é um ${this.tipo}, que ataca usando ${this.ataque}.`)
  }
}
    const heroi1 = new Heroi("Mandrake", 25, "mago", "magia")
    const heroi2 = new Heroi("Connan", 30, "guerreiro", "espada")
    const heroi3 = new Heroi("Mestre", 60, "monge", "artes marciais")
    const heroi4 = new Heroi("Bruce Lee", 35, "ninja", "shuriken")
    
    heroi1.escrever()
    heroi2.escrever()
    heroi3.escrever()
    heroi4.escrever()
