import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { TipoUsuarioEnum } from '../compartilhado/enums/tipo-usuario-enum';
import { SimularLifecycle } from '../compartilhado/components/simular-lifecycle.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage extends SimularLifecycle implements OnInit {

  usuarioMotorista = false;

  constructor(private requestsService: RequestsService, private navCtrl: NavController, private route: ActivatedRoute,
    private router: Router) {
    super(router, route);
  }

  ngOnInit(): void {
    this.usuarioMotorista = this.requestsService.tipoUsuarioLogado() === TipoUsuarioEnum.motorista;
  }

  onEnter(): void {
    if (!this.requestsService.usuarioLogado()) {
      this.navCtrl.navigateRoot('login-page');
      return;
    }

    if (this.requestsService.primeiroAcesso) {
      this.requestsService.primeiroAcesso = false;
      if (this.usuarioMotorista) {
        this.navCtrl.navigateRoot('tabs/tab-grupos');
      } else {
        this.navCtrl.navigateRoot('tabs/tab-aluno-escolar');
      }
    }
  }

}
