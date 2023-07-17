export class ContaPoupanca extends Conta {
    private creditos: number;
    private debitos: number;
  
    constructor() {
      super();
      this.creditos = 0;
      this.debitos = 0;
    }
  
    depositar(valor: number): void {
      const credito: Credito = new Credito(valor);
      this.creditos += credito.getValor();
    }
  
    sacar(valor: number): void {
      const debito: Debito = new Debito(valor);
      if (this.saldo - debito.getValor() >= 0) {
        this.debitos += debito.getValor();
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    transferir(destino: Conta, valor: number): void {
      const debito: Debito = new Debito(valor);
      if (this.saldo - debito.getValor() >= 0) {
        this.debitos += debito.getValor();
        destino.depositar(valor);
      } else {
        console.log("Saldo insuficiente para transferência.");
      }
    }
  
    calcularSaldo(): number {
      return this.creditos - this.debitos;
    }
} 