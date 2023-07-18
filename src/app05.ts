import { ContaCorrente } from "./businessrules/ContaCorrente";
import { Cliente } from "./models/Cliente";

// Cliente que tem uma ContaCorrente
const cliente1: Cliente = new Cliente("João", "123456789", "111.111.111-11", false);
const contaCorrente1: ContaCorrente = new ContaCorrente(0);
cliente1.adicionarConta(contaCorrente1);


contaCorrente1.depositar(300);
contaCorrente1.definirLimite(100);

// Cliente com uma segunda ContaCorrente
const cliente2: Cliente = new Cliente("Maria", "987654321", "222.222.222-22", false);
const contaCorrente2: ContaCorrente = new ContaCorrente(0);
cliente2.adicionarConta(contaCorrente2);

contaCorrente2.depositar(100);
contaCorrente1.transferir(contaCorrente2, 1000);

console.log("------------------------------------------------------------");
console.log(`Saldo da primeira Conta Corrente do Cliente 1: R$ ${contaCorrente1.calcularSaldo()}`);
console.log("------------------------------------------------------------");
console.log(`Saldo da segunda Conta Corrente do Cliente 2: R$ ${contaCorrente2.calcularSaldo()}`);