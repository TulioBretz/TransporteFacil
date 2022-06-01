import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestsService } from '../../compartilhado/services/requests.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoginPageService {

    constructor(private http: HttpClient, private requestsService: RequestsService) {
    }

    //TODO: Criar modelo de rotorno para o login
    efetuarLogin(cpf: string, senha: string): Observable<any> {
        return this.http.get<any>(this.requestsService.serverRoute + '/api/usuarios/login/' + cpf + '/' + senha)
            .pipe(
                catchError(this.requestsService.handleError<any>('efetuar login'))
            );
    }
}

