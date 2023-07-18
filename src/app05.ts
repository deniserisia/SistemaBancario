// App 05

import { ContaCorrente } from "./businessrules/ContaCorrente";
import { Cliente } from "./models/Cliente";

// Crie um cliente que possua uma ContaCorrente
const cliente1: Cliente = new Cliente("João", "123456789", "111.111.111-11", false);
const contaCorrente1: ContaCorrente = new ContaCorrente(100);
cliente1.adicionarConta(contaCorrente1);

// Efetue um depósito de 300 na primeira ContaCorrente
contaCorrente1.depositar(300);

// Defina o valor do limite da primeira ContaCorrente para 100 reais
contaCorrente1.definirLimite(100);

// Crie um cliente que possua uma segunda ContaCorrente
const cliente2: Cliente = new Cliente("Maria", "987654321", "222.222.222-22", false);
const contaCorrente2: ContaCorrente = new ContaCorrente(0);
cliente2.adicionarConta(contaCorrente2);

// Efetue um depósito de 100 reais na segunda ContaCorrente
contaCorrente2.depositar(100);

// Tente efetuar uma transferência de 1000 reais da primeira ContaCorrente para a segunda ContaPoupanca
contaCorrente1.transferir(contaCorrente2, 1000);

// Exiba os saldos das contas após a tentativa de transferência
console.log(`Saldo da primeira ContaCorrente: R$ ${contaCorrente1.calcularSaldo()}`);
console.log(`Saldo da segunda ContaCorrente: R$ ${contaCorrente2.calcularSaldo()}`);