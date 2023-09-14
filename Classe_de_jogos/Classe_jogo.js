
class avatarHeroi{
  // propriedades do método construtor
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
    // Definir tipo de heroi e seu ataque
  definir_tipo(){
    if (this.tipo === 1){
      this.tipoHeroi = "Mago"
      this.ataque = "Magia"
    } else if (this.tipo === 2){
      this.tipoHeroi = "Guerreiro"
      this.ataque = "Golpe de espadas"
    } else if (this.tipo === 3){
      this.tipoHeroi = "Monge"
      this.ataque = "Artes marciais"
    } else {
      this.tipoHeroi = "Ninja"
      this.ataque = "Shuriken"
    }
  }
    // Apresentar as informações básicas do herói
  informacao_heroi(){
    console.log(`${this.nome} é um herói do tipo ${this.tipoHeroi}, com ${this.idade} anos`)
  }
    // Informar o ataque do heroi
  atacar(){
    console.log(`${this.nome} atacou com ${this.ataque}`)
  }
}

avatar = new avatarHeroi("Merlin", 60, 1)
avatar.definir_tipo()

avatar.informacao_heroi()
avatar.atacar()