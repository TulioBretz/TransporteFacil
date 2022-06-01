import { Guid } from 'guid-typescript';

export class Usuario {
    id: string;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    telefone: string;
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    numero: number;
    apto: number;
    bloco: number;
    uf: string;
    isMotorista: boolean;
    codigoEscolar: string;

    // cadastrarUsuario() {
    //     console.log(this, 'THIS');
    // }
}
