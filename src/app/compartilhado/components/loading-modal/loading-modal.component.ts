import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-loading-modal',
  templateUrl: 'loading-modal.component.html',
  styleUrls: ['loading-modal.component.scss']
})
export class LoadingModalComponent implements HttpInterceptor {

  loadingPresent = false;
  acionouPresentLoading = false;
  contadorLoop = 0;
  private totalRequests = 0;

  constructor(public loadingController: LoadingController, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    this.totalRequests++;
    if (!this.loadingPresent) {
      this.loadingPresent = true;
      //this.presentLoading();
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          //this.dismissLoading();
          this.loadingPresent = false;
        }
      })
    );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      translucent: true,
      cssClass: 'loading-css'
    });

    this.acionouPresentLoading = true;
    await loading.present();
  }

  async dismissLoading() {
    //Previne o erro do DismissLoading ser chamado antes do PresentLoading
    //Isto faz com que o Loadign seja exibido sempre
    if (!this.acionouPresentLoading && this.contadorLoop < 1000) {
      return;
      this.contadorLoop++;

      if (this.contadorLoop > 1000) {
        return;
      }
    }
    this.contadorLoop = 0;

    await this.loadingController.dismiss();
    this.acionouPresentLoading = false;
  }
}
