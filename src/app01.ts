import { Funcionario, Gerente, Atendente } from './models/Funcionario';

// Criando um funcionário do banco
console.log("------ Funcionários Do Sistema Bancario -----------");
const funcionario1 = new Funcionario("Funcionario do Banco: João Silva", "CPF: 123.456.789-00", 5000);
console.log("----------------------------------------");
console.log(funcionario1.getNome());  
console.log(funcionario1.getCpf());   
console.log(funcionario1.getSalario());  
console.log("----------------------------------------");

// Criando um gerente do banco
const gerente1 = new Gerente("Gerente do Sistema Bancario: Maria Souza", "CPF: 987.654.321-00", 8000);
console.log(gerente1.getNome());  
console.log(gerente1.getCpf());   
console.log(gerente1.getSalario());
console.log("----------------------------------------");

// Criando um atendente do banco
const atendente1 = new Atendente("Atendente do Sistema Bancario: Pedro Santos", "CPF: 111.222.333-44", 3000);
console.log(atendente1.getNome());  
console.log(atendente1.getCpf());   
console.log(atendente1.getSalario());  