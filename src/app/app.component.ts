import { NavController } from '@ionic/angular';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private requestsService: RequestsService, private navCtrl: NavController) {
    if (!this.requestsService.usuarioLogado()) {
      this.navCtrl.navigateRoot('login-page');
      return;
    }
  }

}
