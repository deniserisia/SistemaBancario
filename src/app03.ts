// 03
import { ContaCorrente } from './businessrules/ContaCorrente';
import { Cliente } from './models/Cliente';

const cliente = new ContaCorrente(500);


cliente.depositar(100);
cliente.depositar(100);
cliente.depositar(100);


cliente.sacar(50);

console.log("--------- EXTRATO BANCARIO-------------")
console.log("Saldo da Conta Corrente:", cliente.calcularSaldo());

