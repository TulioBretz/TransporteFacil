/* eslint-disable max-len */
import { Motorista } from './../../compartilhado/models/Motorista';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Usuario } from './../../compartilhado/models/Usuario';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Aluno } from 'src/app/compartilhado/models/Aluno';

@Injectable()
export class CadastroService {

    dadosProvisoriosUsuarioForm = new Usuario();
    dadosProvisoriosMotoristaForm = new Motorista();
    dadosProvisoriosAlunoForm = new Aluno();

    constructor(private http: HttpClient, private requestsService: RequestsService) { }

    cadastrarUsuario(): Observable<any> {

        //Fluxo motorista
        if (this.dadosProvisoriosMotoristaForm.dadosVeiculo.placa) {
            const data: { dadosUsuario: Usuario; dadosMotorista: Motorista } = { dadosUsuario: new Usuario(), dadosMotorista: new Motorista()};
            data.dadosUsuario = { ...this.dadosProvisoriosUsuarioForm };
            data.dadosMotorista = { ...this.dadosProvisoriosMotoristaForm };

            //TODO: Provisório
            data.dadosUsuario.codigoMotorista = this.dadosProvisoriosUsuarioForm.codigoMotorista;

            // const teste = {teste: 'teste'};
            return this.http.post<any>(this.requestsService.serverRoute + '/api/usuarios/motorista', data, this.requestsService.httpOptions)
                .pipe(
                    catchError(this.requestsService.handleError<any>('cadastrar usuário'))
                );
        }
        else {
            const data: { dadosUsuario: Usuario; dadosAluno: Aluno } = { dadosUsuario: new Usuario(), dadosAluno: new Aluno()};
            data.dadosUsuario = { ...this.dadosProvisoriosUsuarioForm };
            data.dadosAluno = { ...this.dadosProvisoriosAlunoForm };

            // const teste = {teste: 'teste'};
            return this.http.post<any>(this.requestsService.serverRoute + '/api/usuarios/aluno', data, this.requestsService.httpOptions)
                .pipe(
                    catchError(this.requestsService.handleError<any>('cadastrar usuário'))
                );
        }


    }

}
