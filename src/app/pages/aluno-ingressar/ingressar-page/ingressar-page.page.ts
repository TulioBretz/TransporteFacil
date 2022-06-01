import { NavController } from '@ionic/angular';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { IngressarPageService } from './ingressar-page.service';

@Component({
  selector: 'app-ingressar-page',
  templateUrl: './ingressar-page.page.html',
  styleUrls: ['./ingressar-page.page.scss'],
})
export class IngressarPagePage implements OnInit {

  constructor(private requestsService: RequestsService, private navCtrl: NavController,
    private ingressarPageService: IngressarPageService) { }

  ngOnInit() {
  }

  onIngressar() {
    const codigoEscolarInserido = document.getElementById('codigoEscolar') as HTMLInputElement | null;
    const value = codigoEscolarInserido?.value;

    if (!value) {
      this.requestsService.presentAlert('Código não informado', '', 'Favor informar o código do escolar para prosseguir.');
      return;
    }

    this.ingressarPageService.validarCodigoEscolarParaIngresso(value).subscribe(resposta => {
      console.log(resposta, 'resposta');
      // if (resposta && resposta.length === 0) {
      //   this.requestsService.presentToastTop('Dados de acesso inválidos');
      //   return;
      // }
      // else if (resposta && resposta.length > 0) {
      //   this.requestsService.dadosUsuarioLogado = resposta[0];
      //     this.navCtrl.navigateRoot('');
      // }
    });

    // this.navCtrl.navigateForward('');
    this.requestsService.usuarioIngressadoEmEscolar = true;
  }

}
