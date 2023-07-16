export class Cliente extends Pessoa {
    private enderecos: string[];
    private vip: boolean;
  
    constructor(nome: string, telefone: string, cpf: string, vip: boolean) {
      super(nome, telefone, cpf);
      this.enderecos = [];
      this.vip = vip;
    }
  
    listarEnderecos(): void {
      console.log("Endereços do cliente:", this.enderecos);
    }
} 