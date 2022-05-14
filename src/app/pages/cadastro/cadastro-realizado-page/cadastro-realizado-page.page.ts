import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-cadastro-realizado-page',
  templateUrl: './cadastro-realizado-page.page.html',
  styleUrls: ['./cadastro-realizado-page.page.scss'],
})
export class CadastroRealizadoPagePage implements OnInit {

  codigoGerado = 'xPT15d_ufG%';
  qrCodeGerado = '';

  constructor(private navCtrl: NavController) { }

  //TODO: Transformar para Arrow Function
  ngOnInit() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.codigoGerado, { errorCorrectionLevel: 'H' }, function(err, url) {
      self.qrCodeGerado = url;
    });
  }

  onEntrar() {
    this.navCtrl.navigateForward('login-page');
  }

}
