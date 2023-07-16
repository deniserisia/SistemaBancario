class Funcionario {
    private salario: number;
  
    constructor(salario: number) {
      this.salario = salario;
    }
  
    getSalario(): number {
      return this.salario;
    }
  
    setSalario(novoSalario: number): void {
      this.salario = novoSalario;
    }
}  