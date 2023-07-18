export abstract class Conta {
  protected saldo: number;
  protected creditos: number;

  constructor() {
    this.saldo = 0;
    this.creditos = 0;
  }

  abstract depositar(valor: number): void;
  abstract sacar(valor: number): void;
  abstract transferir(destino: Conta, valor: number): void;
  abstract calcularSaldo(): number;
}