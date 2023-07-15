// Classe abstrata Pessoa
abstract class Pessoa {
    protected nome: string;
    protected idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    abstract listarEnderecos(): void; // Método abstrato
}