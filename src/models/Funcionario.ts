import { IUsuario } from "./IUsuario";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa implements IUsuario {
  protected salario: number;
  protected nome: string;
  protected cpf: string;

  constructor(nome: string, cpf: string, salario: number) {
    super(nome, "", cpf); // Adicionei uma string vazia para o telefone, já que a classe Pessoa requer um telefone.
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
  }

  verificar(): boolean {
    return true;
  }

  getSalario(): number {
    return this.salario;
  }

  setSalario(novoSalario: number): void {
    this.salario = novoSalario;
  }

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }

  listarEnderecos(): void {
    // Implementação vazia, já que Funcionario não precisa listar endereços
  }
}

export class Gerente extends Funcionario {
  constructor(nome: string, cpf: string, salario: number) {
    super(nome, cpf, salario);
  }
}

export class Atendente extends Funcionario {
  constructor(nome: string, cpf: string, salario: number) {
    super(nome, cpf, salario);
  }
}
