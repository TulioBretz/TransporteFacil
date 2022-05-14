import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Injectable()
export class RequestsService {

    //serverRoute = 'http://localhost:3000';
    serverRoute = 'https://transportefacil-api.herokuapp.com';
    httpOptions = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private toastController: ToastController) {
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 7000,
            keyboardClose: true,
            position: 'top'
        });
        toast.present();
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.presentToast(`Falha ao ${operation}. Tente novamente em alguns minutos.`);
            return of(result as T);
        };
    }


}
