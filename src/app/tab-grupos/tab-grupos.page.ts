import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimularLifecycle } from '../compartilhado/components/simular-lifecycle.component';

@Component({
  selector: 'app-tab-grupos',
  templateUrl: './tab-grupos.page.html',
  styleUrls: ['./tab-grupos.page.scss'],
})
export class TabGruposPage extends SimularLifecycle implements OnInit {

  constructor(private requestsService: RequestsService, private navCtrl: NavController, private route: ActivatedRoute,
    private router: Router) {
    super(router, route);
  }

  ngOnInit() {
  }

  onEnter(): void {
    this.requestsService.obterGrupos().subscribe((resposta: any) => {

      if (resposta) {
        console.log(resposta, 'GRUPOSSS');
      }
    });
  }

  onAddGrupoClick() {
    this.navCtrl.navigateForward('novo-grupo');
  }

}
