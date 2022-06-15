import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-tab-motorista-codigo',
  templateUrl: './tab-motorista-codigo.page.html',
  styleUrls: ['./tab-motorista-codigo.page.scss'],
})
export class TabMotoristaCodigoPage implements OnInit {

  codigoMotorista = this.requestsService.dadosUsuarioLogado.codigoMotorista;
  qrCodeGerado = '';

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    // this.codigoGerado = this.cadastroService.dadosProvisoriosMotoristaForm.codigo;

    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.codigoMotorista, { errorCorrectionLevel: 'H' }, function(err, url) {
      self.qrCodeGerado = url;
    });
  }

}
