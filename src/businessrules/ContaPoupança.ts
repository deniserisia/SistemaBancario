import { Conta } from "../models/Conta";
import { Credito } from "../models/Credito";
import { Debito } from "../models/Debito";

export class ContaPoupanca extends Conta {
  depositar(valor: number): void {
    const credito: Credito = new Credito(valor);
    this.creditos += credito.getValor();
  }

  sacar(valor: number): void {
    const debito: Debito = new Debito(valor);
    if (this.saldo - debito.getValor() >= 0) {
      this.saldo -= debito.getValor();
    } else {
      console.log("Saldo insuficiente para saque.");
    }
  }

  transferir(destino: Conta, valor: number): void {
    const debito: Debito = new Debito(valor);
    if (this.saldo - debito.getValor() >= 0) {
      this.saldo -= debito.getValor();
      destino.depositar(valor);
    } else {
      console.log("Saldo insuficiente para transferência.");
    }
  }

  calcularSaldo(): number {
    return this.creditos;
  }
}