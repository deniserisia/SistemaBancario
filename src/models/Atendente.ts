export class Atendente {
    private nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(novoNome: string): void {
      this.nome = novoNome;
    }
}