/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';

@Injectable({
  providedIn: 'root'
})
export class DadosMotoristaService {

  constructor(private http: HttpClient, private requestsService: RequestsService) { }

  desvincularUsuarioEscolar(alunoId: string) {
    return this.http.put<any>(this.requestsService.serverRoute + '/api/alunos/desvincular', {id: alunoId}, this.requestsService.httpOptions)
      .pipe(
        catchError(this.requestsService.handleError<any>('desvincular aluno do escolar'))
      );
  }
}
