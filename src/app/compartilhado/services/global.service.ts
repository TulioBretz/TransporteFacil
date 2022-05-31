import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    ufList = [{ descricao: 'Acre', sigla: 'AC' },
    { descricao: 'Alagoas', sigla: 'AL' },
    { descricao: 'Amapá', sigla: 'AP' },
    { descricao: 'Amazonas', sigla: 'AM' },
    { descricao: 'Bahia', sigla: 'BA' },
    { descricao: 'Ceará', sigla: 'CE' },
    { descricao: 'Distrito Federal', sigla: 'DF' },
    { descricao: 'Espírito Santo', sigla: 'ES' },
    { descricao: 'Goiás', sigla: 'GO' },
    { descricao: 'Maranhão', sigla: 'MA' },
    { descricao: 'Mato Grosso', sigla: 'MT' },
    { descricao: 'Mato Grosso do Sul', sigla: 'MS' },
    { descricao: 'Minas Gerais', sigla: 'MG' },
    { descricao: 'Pará', sigla: 'PA' },
    { descricao: 'Paraíba', sigla: 'PB' },
    { descricao: 'Paraná', sigla: 'PR' },
    { descricao: 'Pernambuco', sigla: 'PE' },
    { descricao: 'Piauí', sigla: 'PI' },
    { descricao: 'Rio de Janeiro', sigla: 'RJ' },
    { descricao: 'Rio Grande do Norte', sigla: 'RN' },
    { descricao: 'Rio Grande do Sul', sigla: 'RS' },
    { descricao: 'Rondônia', sigla: 'RO' },
    { descricao: 'Roraima', sigla: 'RR' },
    { descricao: 'Santa Catarina', sigla: 'SC' },
    { descricao: 'São Paulo', sigla: 'SP' },
    { descricao: 'Sergipe', sigla: 'SE' },
    { descricao: 'Tocantins', sigla: 'TO' }];

    tipoVeiculoList = [
        { descricao: 'Carro', codigo: 1 },
        { descricao: 'Van', codigo: 2 },
        { descricao: 'Ônibus', codigo: 3 },
        { descricao: 'Microônibus', codigo: 4 },
        { descricao: 'Não Especificado', codigo: 5 }];

    corVeiculoList = [
        { descricao: 'Amarelo', codigo: 1 },
        { descricao: 'Azul', codigo: 2 },
        { descricao: 'Bege', codigo: 3 },
        { descricao: 'Branco', codigo: 4 },
        { descricao: 'Bronze', codigo: 5 },
        { descricao: 'Cinza', codigo: 6 },
        { descricao: 'Dourado', codigo: 7 },
        { descricao: 'Laranja', codigo: 8 },
        { descricao: 'Marrom', codigo: 9 },
        { descricao: 'Prata', codigo: 10 },
        { descricao: 'Preto', codigo: 11 },
        { descricao: 'Rosa', codigo: 12 },
        { descricao: 'Roxo', codigo: 13 },
        { descricao: 'Verde', codigo: 14 },
        { descricao: 'Vermelho', codigo: 15 },
        { descricao: 'Vinho', codigo: 16 },
        { descricao: 'Indefinida', codigo: 17 }];

    turnoList = [
        { descricao: 'Manhã', codigo: 1 },
        { descricao: 'Tarde', codigo: 2 },
        { descricao: 'Noite', codigo: 3 }];

    constructor() {
    }

    //TODO: Criar regex para validação da senha
    validarFormatoDeSenha(senha: string): boolean {
        const regexp = new RegExp('/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/');

        // if (!regexp.test(senha)) {
        //     return false;
        // }

        // if (!senha.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)) {
        //     return false;
        // }

        // if (senha.search(regexExpr) === -1) {
        //     return false;
        // }

        return true;
    }
}
