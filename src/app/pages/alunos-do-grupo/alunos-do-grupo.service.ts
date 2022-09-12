import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AlunosGrupoModel } from 'src/app/compartilhado/models/AlunosGrupoModel';

@Injectable({
  providedIn: 'root'
})
export class AlunosDoGrupoService {

  constructor(private http: HttpClient, private requestsService: RequestsService) { }

  obterAlunosGrupo(grupoId: string) {
    return this.http.get<any>(this.requestsService.serverRoute + '/api/grupos/alunos/' + grupoId)
      .pipe(
        catchError(this.requestsService.handleError<any>('obter alunos do grupo'))
      );
  }

  removerAlunos(alunoId: string, grupoId: string) {
    return this.http.delete<any>(this.requestsService.serverRoute + '/api/grupos/alunos/' + alunoId + '/' + grupoId)
      .pipe(
        catchError(this.requestsService.handleError<any>('remover alunos do grupo'))
      );
  }
}
