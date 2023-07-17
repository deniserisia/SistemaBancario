import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa {
  getContaCorrente() {
      throw new Error("Method not implemented.");
  }
  private enderecos: string[];
  private vip: boolean;

  constructor(nome: string, telefone: string, cpf: string, vip: boolean) {
    super(nome, telefone, cpf);
    this.enderecos = [];
    this.vip = vip;
  }

  adicionarEndereco(endereco: string): void {
    this.enderecos.push(endereco);
  }

  listarEnderecos(): void {
    console.log("Endereços do cliente:", this.enderecos);
  }
}