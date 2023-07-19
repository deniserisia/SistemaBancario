//02 aplicação
import { Cliente } from './models/Cliente';

const cliente1 = new Cliente("João Silva", "Telefone: (11) 9999-9999", "CPF: 123.456.789-00", true);

// Adicionando os 3 endereços para 1 cliente
cliente1.adicionarEndereco("Rua A, 123");
cliente1.adicionarEndereco("Avenida B, 456");
cliente1.adicionarEndereco("Travessa C, 789");

cliente1.listarEnderecos();
