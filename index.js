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

let jogadoru = new Jogadorfutebol("Lionel Messi", "atacante", "24/06/1987", "Argentino", "1,69m", "67 kg");
console.log(jogadoru.mostrarAtributos() + jogadoru.tempoAposentar());

let jogadord = new Jogadorfutebol("Eduardo Pereira Rodrigues", "meio-campo", "07/01/1992", "Brasileiro", "1,66m", "63 kg");
console.log(jogadord.mostrarAtributos() + jogadord.tempoAposentar());