
// Classe abstrata Conta
abstract class Conta {
    protected saldo: number;
  
    constructor() {
      this.saldo = 0;
    }
  
    abstract depositar(valor: number): void; // Método abstrato
    abstract sacar(valor: number): void; // Método abstrato
    abstract transferir(destino: Conta, valor: number): void; // Método abstrato
    abstract calcularSaldo(): number; // Método abstrato
}