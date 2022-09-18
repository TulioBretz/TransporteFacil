/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { CadastroService } from './../cadastro.service';
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

  constructor(private navCtrl: NavController, private cadastroService: CadastroService, private requestsService: RequestsService) { }

  //TODO: Transformar para Arrow Function
  ngOnInit() {
    if (!this.validarCodigoGerado()) {
      this.requestsService.presentAlert('', 'Atenção!', ErrorMessageEnum.codigoMotoristaNaoGerado);
      return;
    }

    this.codigoGerado = this.cadastroService.dadosProvisoriosUsuarioForm.codigoMotorista;

    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.codigoGerado, { errorCorrectionLevel: 'H' }, function(err, url) {
      self.qrCodeGerado = url;
    });
  }

  onEntrar() {
    if (!this.validarCodigoGerado()) {
      this.requestsService.presentAlert('', 'Atenção!', ErrorMessageEnum.codigoMotoristaNaoGerado);
      return;
    }

    this.navCtrl.navigateForward('login-page');
  }

  validarCodigoGerado(): boolean {
    if (!this.cadastroService.dadosProvisoriosUsuarioForm.codigoMotorista) {
      return false;
    }

    return true;
  }

}
