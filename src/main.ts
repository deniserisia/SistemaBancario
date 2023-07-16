//import { Funcionario} from './models/Funcionario';
import { Cliente } from './models/Cliente';


// Exemplo de uso
const funcionario1: Funcionario = new Gerente("João", "123456789", 5000);
console.log(funcionario1.getNome()); // Saída: João
console.log(funcionario1.getCpf()); // Saída: 123456789
console.log(funcionario1.getSalario()); // Saída: 5000

const funcionario2: Funcionario = new Atendente("Maria", "987654321", 2500);
console.log(funcionario2.getNome()); // Saída: Maria
console.log(funcionario2.getCpf()); // Saída: 987654321
console.log(funcionario2.getSalario()); // Saída: 2500

console.log("Endereços do cliente:");
//cliente.listarEnderecos();
