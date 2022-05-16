import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  alunoIngressadoEmEscolar = false;

  constructor(private navCtrl: NavController, public requestsService: RequestsService) {
  }

  ngOnInit(): void {
    this.alunoIngressadoEmEscolar = this.requestsService.usuarioIngressadoEmEscolar;
  }

  onFiltrarInput() {

  }

  onIngressar() {
    this.navCtrl.navigateForward('ingressar-page');
  }
}
