import { ContaCorrente } from '../businessrules/ContaCorrente';
import { Pessoa } from './Pessoa';
import { Conta } from "./Conta";

export class Cliente extends Pessoa {
  private enderecos: string[];
  private vip: boolean;
  private contas: Conta[];

  constructor(nome: string, telefone: string, cpf: string, vip: boolean) {
    super(nome, telefone, cpf);
    this.enderecos = [];
    this.vip = vip;
    this.contas = [];
  }

  adicionarEndereco(endereco: string): void {
    this.enderecos.push(endereco);
  }

  listarEnderecos(): void {
    console.log("Endereços do cliente:", this.enderecos);
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }
}
