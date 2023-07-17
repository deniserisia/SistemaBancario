export class ContaCorrente extends Conta {
    private creditos: number;
    private debitos: number;
    private limite: number;
  
    constructor(limite: number) {
      super();
      this.creditos = 0;
      this.debitos = 0;
      this.limite = limite;
    }
  
    depositar(valor: number): void {
      const credito: Credito = new Credito(valor);
      this.creditos += credito.getValor();
    }
  
    sacar(valor: number): void {
      const debito: Debito = new Debito(valor);
      if (this.saldo + this.limite - debito.getValor() >= 0) {
        this.debitos += debito.getValor();
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    transferir(destino: Conta, valor: number): void {
      const debito: Debito = new Debito(valor);
      if (this.saldo + this.limite - debito.getValor() >= 0) {
        this.debitos += debito.getValor();
        destino.depositar(valor);
      } else {
        console.log("Saldo insuficiente para transferência.");
      }
    }
  
    calcularSaldo(): number {
      return this.creditos - this.debitos + this.limite;
    }
}  