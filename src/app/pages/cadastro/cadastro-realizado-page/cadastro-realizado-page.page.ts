import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-cadastro-realizado-page',
  templateUrl: './cadastro-realizado-page.page.html',
  styleUrls: ['./cadastro-realizado-page.page.scss'],
})
export class CadastroRealizadoPagePage implements OnInit {

  codigoGerado = '';
  qrCodeGerado = '';

  constructor(private navCtrl: NavController) { }

  //TODO: Transformar para Arrow Function
  ngOnInit() {
    let novoCodigoRandomico = '';
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvxw123456789!@#$%^&*?';
    for (let i = 0; i < 10; i++) {
      novoCodigoRandomico += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.codigoGerado = novoCodigoRandomico;

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
