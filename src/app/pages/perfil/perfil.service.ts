/* eslint-disable max-len */
import { AlterarDadosUsuarioModel } from './models/alterar-dados-usuario-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { AlterarDadosEnderecoModel } from './models/alterar-dados-endereco-model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient, private requestsService: RequestsService) { }

  salvarDadosUsuario(dadosUsuario: AlterarDadosUsuarioModel) {
    return this.http.put<any>(this.requestsService.serverRoute + '/api/usuarios/alterardados', dadosUsuario, this.requestsService.httpOptions)
      .pipe(
        catchError(this.requestsService.handleError<any>('alterar dados do usuário'))
      );
  }

  salvarDadosEndereco(dadosEndereco: AlterarDadosEnderecoModel) {
    return this.http.put<any>(this.requestsService.serverRoute + '/api/usuarios/alterarendereco', dadosEndereco, this.requestsService.httpOptions)
      .pipe(
        catchError(this.requestsService.handleError<any>('alterar dados de endereço'))
      );
  }

}
