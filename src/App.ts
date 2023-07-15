import { ContaCorrente } from './ContaCorrente';
import { Cliente} from './Cliente';

// Aplicação 1
const gerente = new Funcionario('João', 'Gerente');
const atendente = new Funcionario('Maria', 'Atendente');

console.log(gerente);
console.log(atendente);

// Aplicação 2
const cliente = new Cliente('Pedro');
cliente.adicionarEndereco('Rua A, 123');
cliente.adicionarEndereco('Avenida B, 456');
cliente.adicionarEndereco('Travessa C, 789');

console.log('Endereços do cliente:');
cliente.listarEnderecos();

// Aplicação 3
const cliente2 = new Cliente('Joana');
const contaCorrente = new ContaCorrente(500); // Limite de -500

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.sacar(50);

console.log('Saldo da Conta Corrente:', contaCorrente.calcularSaldo());
