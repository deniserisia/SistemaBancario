// 03
import { ContaCorrente } from './businessrules/ContaCorrente';
import { Cliente } from './models/Cliente';


// Cria um cliente com uma ContaCorrente
const cliente = new ContaCorrente(500);

// Efetua três depósitos de 100
cliente.depositar(100);
cliente.depositar(100);
cliente.depositar(100);

// Efetua um saque de 50
cliente.sacar(50);

// Imprime o valor do saldo
console.log("--------- EXTRATO BANCARIO-------------")
console.log("Saldo da Conta Corrente:", cliente.calcularSaldo());

