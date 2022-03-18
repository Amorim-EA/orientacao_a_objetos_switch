class Jogadorfutebol {
  constructor(nome, posicao, data_de_nascimento, nacionalidade, altura, peso) {
    this.nome = nome;
    this.posicao = posicao;
    this.data_de_nascimento = data_de_nascimento;
    this.nacionalidade = nacionalidade;
    this.altura = altura;
    this.peso = peso;
  }

  mostrarAtributos() {
    return "Nome: " + this.nome + "\n" + "Posição: " + this.posicao + "\n" + "Data de Nascimento: " + this.data_de_nascimento + "\n" + "Nacionalidade: " + this.nacionalidade + "\n" + "Altura: " + this.altura + "\n" + "Peso: " + this.peso + "\n";
}
  
  calcularIdade() {
    let data = new Date();
    let ano_atual = data.getFullYear();
    let anoNascimento = this.data_de_nascimento.split("/")[2];
    let calculandoIdade = (ano_atual - anoNascimento);
    return calculandoIdade;
}
    
  tempoAposentar(){
    
    var idade = this.calcularIdade();

    switch (this.posicao) {
    case 'defesa':
         if (idade < 40) { 
         let tempo = 40 - idade;
         return "Pode se aposentar dentro de " + tempo + " anos!\n";                
         } else {
         return "Pode se aposentar!\n";
         }
    break;
    case 'meio-campo':
         if (idade < 38) {
         let tempo = 38 - idade;
         return "Pode se aposentar dentro de " + tempo + " anos!\n";  
         } else {
         return "Pode se aposentar!\n";
         }
    break;
    case 'atacante':
         if (idade < 35) {
         let tempo = 35 - idade;
         return "Pode se aposentar dentro de " + tempo + " anos!\n";
         } else {
         return "Pode se aposentar!\n";
         }
    break;
    default:
        return "Posição não está cadastrado para a aposentadoria!\n";
         }
    }
}

let jogador1 = new Jogadorfutebol("Lionel Messi", "atacante", "24/06/1987", "argentino", "1,69m", "67 kg");
console.log(jogador1.mostrarAtributos() + jogador1.tempoAposentar());

let jogador2 = new Jogadorfutebol("Eduardo Pereira Rodrigues", "meio-campo", "07/01/1992", "brasileiro", "1,66m", "63 kg");
console.log(jogador2.mostrarAtributos() + jogador2.tempoAposentar());

let jogador3 = new Jogadorfutebol("Cássio Ramos", "defesa", "06/06/1987", "brasileiro", "1,96m", "92 kg");
console.log(jogador3.mostrarAtributos() + jogador3.tempoAposentar());

let jogador4 = new Jogadorfutebol("Cristiano Ronaldo", "centroavante", "05/01/1985", "português", "1,87m", "84 kg");
console.log(jogador4.mostrarAtributos() + jogador4.tempoAposentar());
