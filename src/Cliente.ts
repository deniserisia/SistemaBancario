// Classe Cliente que herda de Pessoa
class Cliente extends Pessoa {
    private enderecos: string[];
  
    constructor(nome: string, idade: number) {
      super(nome, idade);
      this.enderecos = [];
    }
  
    listarEnderecos(): void {
      console.log("Endereço do cliente:", this.enderecos);
    }
}  