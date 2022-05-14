import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestsService } from './../../compartilhado/services/requests.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginPageService {

    constructor(private http: HttpClient, private requestsService: RequestsService) {
    }

    efetuarLogin(cpf: string, senha: string) {
        return this.http.get<any>(this.requestsService.serverRoute + '/api/login/' + cpf + '/' + senha)
            .pipe(
                catchError(this.requestsService.handleError<any>('efetuar login'))
            );
    }
}

