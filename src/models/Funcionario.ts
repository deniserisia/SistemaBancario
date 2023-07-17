export class Funcionario {
  protected salario: number;
  protected nome: string;
  protected cpf: string;

  constructor(nome: string, cpf: string, salario: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
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