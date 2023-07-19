import { ContaCorrente } from '../businessrules/ContaCorrente';
import { Pessoa } from './Pessoa';
import { Conta } from "./Conta";
import { IUsuario } from './IUsuario';

export class Cliente extends Pessoa implements IUsuario {
  private enderecos: string[];
  private vip: boolean;
  private contas: Conta[];

  constructor(nome: string, telefone: string, cpf: string, vip: boolean) {
    super(nome, telefone, cpf);
    this.enderecos = [];
    this.vip = vip;
    this.contas = [];
  }
  // add da interface e sua RN
  verificar(): boolean {
    return true;
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
