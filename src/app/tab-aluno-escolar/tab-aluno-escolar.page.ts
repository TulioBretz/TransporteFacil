import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TipoUsuarioEnum } from '../compartilhado/enums/tipo-usuario-enum';
import { SimularLifecycle } from '../compartilhado/components/simular-lifecycle.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-aluno-escolar',
  templateUrl: 'tab-aluno-escolar.page.html',
  styleUrls: ['tab-aluno-escolar.page.scss']
})

export class TabAlunoEscolarPage extends SimularLifecycle implements OnInit {

  constructor(private navCtrl: NavController, public requestsService: RequestsService,
    private route: ActivatedRoute, private router: Router) {
    super(router, route);

    if (this.requestsService.tipoUsuarioLogado() === TipoUsuarioEnum.motorista) {
      // this.navCtrl.navigateRoot('tab-motorista-codigo');
      return;
    }
  }

  onEnter(): void {
    // if (this.requestsService.tipoUsuarioLogado() === TipoUsuarioEnum.motorista) {
    //   this.navCtrl.navigateRoot('tabs/tab-grupos');
    // }
  }

  ngOnInit(): void {
  }

  onFiltrarInput() {
  }

  onIngressar() {
    this.navCtrl.navigateForward('ingressar-page');
  }
}
