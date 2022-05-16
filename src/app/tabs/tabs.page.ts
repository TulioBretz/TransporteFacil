import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { TipoUsuarioEnum } from '../compartilhado/enums/error-message-enum';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  usuarioMotorista = false;

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.usuarioMotorista = this.requestsService.tipoUsuarioLogado === TipoUsuarioEnum.motorista;
  }

}
