import { Credito } from '../models/Credito';
import { Debito } from '../models/Debito';
import { Conta } from '../models/Conta';

export class ContaCorrente extends Conta {
  private debitos: number;
  private limite: number;

  constructor(limite: number) {
    super();
    this.debitos = 0;
    this.limite = limite;
  }

  depositar(valor: number): void {
    const credito: Credito = new Credito(valor);
    this.creditos += credito.getValor();
    this.saldo += valor;
  }

  sacar(valor: number): void {
    const debito: Debito = new Debito(valor);
    if (this.saldo + this.limite - debito.getValor() >= 0) {
      this.debitos += debito.getValor();
      this.saldo -= debito.getValor();
    } else {
      console.log("Saldo insuficiente para saque.");
    }
  }

  transferir(destino: Conta, valor: number): void {
    const debito: Debito = new Debito(valor);
    if (this.saldo + this.limite - debito.getValor() >= 0) {
      this.debitos += debito.getValor();
      this.saldo -= debito.getValor();
      destino.depositar(valor);
    } else {
      console.log("Saldo insuficiente para transferência.");
    }
  }

  calcularSaldo(): number {
    return this.creditos - this.debitos + this.limite;
  }

  definirLimite(limite: number): void {
    this.limite = limite;
  }
}
