import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoGrupoModel } from 'src/app/compartilhado/models/NovoGrupoModel';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NovoGrupoService {

constructor(private http: HttpClient, private requestsService: RequestsService) { }

criarNovoGrupo(novoGrupo: NovoGrupoModel) {
  return this.http.post<any>(this.requestsService.serverRoute + '/api/grupos/grupo', novoGrupo, this.requestsService.httpOptions)
    .pipe(
      catchError(this.requestsService.handleError<any>('criar o grupo'))
    );
}
}
