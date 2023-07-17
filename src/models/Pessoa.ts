export abstract class Pessoa {
    protected nome: string;
    protected telefone: string;
    protected cpf: string;
    
    constructor(nome: string, telefone: string, cpf: string) {
      this.nome = nome;
      this.telefone = telefone;
      this.cpf = cpf;
    }
  
    abstract listarEnderecos(): void; // Método abstrato
}