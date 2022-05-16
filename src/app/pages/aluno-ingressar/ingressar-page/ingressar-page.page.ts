import { NavController } from '@ionic/angular';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingressar-page',
  templateUrl: './ingressar-page.page.html',
  styleUrls: ['./ingressar-page.page.scss'],
})
export class IngressarPagePage implements OnInit {

  constructor(private requestsService: RequestsService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onConcluir() {
    const codigoEscolarInserido = document.getElementById('codigoEscolar') as HTMLInputElement | null;
    const value = codigoEscolarInserido?.value;

    if (!value) {
      this.requestsService.presentAlert('Código não informado', '', 'Favor informar o código do escolar para prosseguir.');
      return;
    }

    this.navCtrl.navigateForward('');
    this.requestsService.usuarioIngressadoEmEscolar = true;
  }

}
