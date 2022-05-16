import { TipoUsuarioEnum } from './../enums/error-message-enum';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Injectable()
export class RequestsService {

    serverRoute = 'http://localhost:3000';
    //serverRoute = 'https://transportefacil-api.herokuapp.com';
    httpOptions = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    tipoUsuarioLogado = TipoUsuarioEnum.aluno;
    usuarioIngressadoEmEscolar = true;

    constructor(private toastController: ToastController, private alertController: AlertController) {
    }

    async presentToastTop(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 7000,
            keyboardClose: true,
            position: 'top'
        });
        toast.present();
    }

    async presentToastMiddle(msg: string) {
        console.log('ddd');
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            keyboardClose: true,
            position: 'middle'
        });
        toast.present();
    }

    async presentToastBottom(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 7000,
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
}
