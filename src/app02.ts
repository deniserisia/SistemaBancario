//02 aplicação
import { Cliente } from './models/Cliente';

const cliente1 = new Cliente("João Silva", "123456789", "111.222.333-44", true);

// Adicionando os 3 endereços para 1 cliente
cliente1.adicionarEndereco("Rua A, 123");
cliente1.adicionarEndereco("Avenida B, 456");
cliente1.adicionarEndereco("Travessa C, 789");

cliente1.listarEnderecos();
