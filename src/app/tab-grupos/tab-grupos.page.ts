import { GrupoModel } from 'src/app/compartilhado/models/GrupoModel';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SimularLifecycle } from '../compartilhado/components/simular-lifecycle.component';
import { AlunosSelecaoModel } from '../compartilhado/models/AlunosSelecaoModel';

@Component({
  selector: 'app-tab-grupos',
  templateUrl: './tab-grupos.page.html',
  styleUrls: ['./tab-grupos.page.scss'],
})
export class TabGruposPage extends SimularLifecycle implements OnInit {

  gruposList: GrupoModel[];
  alunosList = [new AlunosSelecaoModel()];

  constructor(private requestsService: RequestsService, private navCtrl: NavController, private route: ActivatedRoute,
    private router: Router, private alertController: AlertController) {
    super(router, route);
  }

  ngOnInit() {
  }

  onEnter(): void {
    this.requestsService.obterGrupos().subscribe((resposta: any) => {
      if (resposta && resposta.length) {
        this.gruposList = resposta;
      }
    });
  }

  onAddGrupoClick() {
    this.navCtrl.navigateForward('novo-grupo');
  }

  onDeletarGrupo(id: string) {
    this.requestsService.deletarGrupo(id).subscribe((resposta: any) => {
      if (resposta) {
        this.gruposList.splice(this.gruposList.findIndex(x => x.id === id), 1);
      }
    });
  }

  onGrupoClick(id: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        grupoId: id
      }
    };

    this.navCtrl.navigateForward('alunos-do-grupo', navigationExtras);
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Você realmente deseja excluir este grupo?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.onDeletarGrupo(id);
          }
        }
      ]
    });
    await alert.present();
  }

  onCancelar() {
    const modal = document.querySelector('ion-modal');
    modal.dismiss(null, 'cancel');
  }

  onConfirmar() {
    const modal = document.querySelector('ion-modal');
    modal.dismiss(null, 'confirm');
  }
}
