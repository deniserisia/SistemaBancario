import { ContaCorrente } from '../businessrules/ContaCorrente';
import { ContaPoupanca } from '../businessrules/ContaPoupança';
import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa {
  getConta() {
      throw new Error('Method not implemented.');
  }
  setContaCorrente(contaCorrente: ContaCorrente) {
      throw new Error('Method not implemented.');
  }
  setContaPoupanca(contaPoupanca: ContaPoupanca) {
      throw new Error('Method not implemented.');
  }
  getContaCorrente() {
      throw new Error('Method not implemented.');
  }
  getContaPoupanca(): any {
      throw new Error('Method not implemented.');
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