import { Usuario } from './../models/Usuario';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { TipoUsuarioEnum } from '../enums/tipo-usuario-enum';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RequestsService {

    //serverRoute = 'http://localhost:3000';
    serverRoute = 'https://transportefacil-api.herokuapp.com';
    httpOptions = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    dadosUsuarioLogado: Usuario = new Usuario();
    primeiroAcesso = true;

    constructor(private toastController: ToastController, private alertController: AlertController, private http: HttpClient) {
    }

    usuarioIngressadoEmEscolar(): boolean {
        return this.dadosUsuarioLogado.codigoEscolar !== '' && this.dadosUsuarioLogado.codigoEscolar !== null;
    }

    tipoUsuarioLogado(): TipoUsuarioEnum {
        if (this.dadosUsuarioLogado.codigoMotorista !== '' && this.dadosUsuarioLogado.codigoMotorista !== null) {
            return TipoUsuarioEnum.motorista;
        } else {
            return TipoUsuarioEnum.aluno;
        }
    }

    usuarioLogado(): boolean {
        return this.dadosUsuarioLogado.id !== '' && this.dadosUsuarioLogado.id !== null;
    }

    async presentToastTop(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 3000,
            keyboardClose: true,
            position: 'top'
        });
        toast.present();
    }

    async presentToastMiddle(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 3000,
            keyboardClose: true,
            position: 'middle'
        });
        toast.present();
    }

    async presentToastBottom(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 3000,
            keyboardClose: true,
            position: 'bottom'
        });
        toast.present();
    }

    async presentAlert(headerText: string, subHeaderText: string, messageText: string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: headerText,
            subHeader: subHeaderText,
            message: messageText,
            buttons: ['OK']
        });

        await alert.present();
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.presentToastTop(`Falha ao ${operation}. Tente novamente em alguns minutos.`);
            return of(result as T);
        };
    }

    //#region Requisições Globais
    obterDadosMotorista(codigoMotorista: string) {
        return this.http.get<any>(this.serverRoute + '/api/motoristas/motorista/' + codigoMotorista)
            .pipe(
                catchError(this.handleError<any>('obter dados do motorista'))
            );
    }
    //#endregion
}
