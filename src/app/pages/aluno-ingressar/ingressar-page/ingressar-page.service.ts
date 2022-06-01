import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';

@Injectable()
export class IngressarPageService {

    constructor(private http: HttpClient, private requestsService: RequestsService) {
    }

    //TODO: Criar modelo de rotorno para o login
    validarCodigoEscolarParaIngresso(codigoInformado: string): Observable<any> {
        return this.http.get<any>(this.requestsService.serverRoute + '/api/usuarios/ingressar/' + codigoInformado +
        '/' + this.requestsService.dadosUsuarioLogado.id)
            .pipe(
                catchError(this.requestsService.handleError<any>('efetuar login'))
            );
    }
}

