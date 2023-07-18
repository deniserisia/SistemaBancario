// 04
import { Cliente } from './models/Cliente';
import { ContaCorrente } from './businessrules/ContaCorrente';
import { ContaPoupanca } from './businessrules/ContaPoupança';

const cliente1: Cliente = new Cliente("Cliente 1", "123456789", "111.111.111-11", false);
const contaCorrente1: ContaCorrente = new ContaCorrente(0);
cliente1.adicionarConta(contaCorrente1);

contaCorrente1.depositar(1000);

const cliente2: Cliente = new Cliente("Cliente 2", "987654321", "222.222.222-22", false);
const contaPoupanca: ContaPoupanca = new ContaPoupanca();
cliente2.adicionarConta(contaPoupanca);

contaPoupanca.depositar(1000);

contaCorrente1.transferir(contaPoupanca, 500);

console.log("------------------------------------------------------------");
console.log(`Saldo da Conta Corrente: R$ ${contaCorrente1.calcularSaldo()}`);
console.log("------------------------------------------------------------");
console.log(`Saldo da Conta Poupança: R$ ${contaPoupanca.calcularSaldo()}`);
console.log("------------------------------------------------------------");