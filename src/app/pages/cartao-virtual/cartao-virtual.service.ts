/* eslint-disable max-len */
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { MuralMotoristasModel } from 'src/app/compartilhado/models/MuralMotoristasModel';

@Injectable({
  providedIn: 'root'
})
export class CartaoVirtualService {

  constructor(private http: HttpClient, private requestsService: RequestsService) { }

  salvarCartaoVirtual(locaisAtendimento: string) {

    const muralMotorista = new MuralMotoristasModel();
    muralMotorista.locaisAtendimento = locaisAtendimento;
    muralMotorista.motoristaId = this.requestsService.dadosUsuarioLogado.id;
    muralMotorista.motoristaNome = this.requestsService.dadosUsuarioLogado.nome;
    muralMotorista.motoristaEmail = this.requestsService.dadosUsuarioLogado.email;
    muralMotorista.motoristaTelefone = this.requestsService.dadosUsuarioLogado.telefone;
    muralMotorista.motoristaTipoVeiculo = 'van';


    return this.http.post<any>(this.requestsService.serverRoute + '/api/motoristas/muralmotorista', muralMotorista, this.requestsService.httpOptions)
      .pipe(
        catchError(this.requestsService.handleError<any>('cadastrar cartão virtual'))
      );
  }
}
