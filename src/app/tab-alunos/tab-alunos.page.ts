import { NavController } from '@ionic/angular';
/* eslint-disable max-len */
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab-alunos',
  templateUrl: './tab-alunos.page.html',
  styleUrls: ['./tab-alunos.page.scss'],
})

export class TabAlunosPage implements OnInit {

  alunosIngressadosList = [];
  constructor(private requestsService: RequestsService, private navCtrl: NavController) { }

  ngOnInit() {

    if (!this.requestsService.alunosIngressadosList || (this.requestsService.alunosIngressadosList &&
      !this.requestsService.alunosIngressadosList.length)) {
      this.requestsService.presentToastTop('Nenhum aluno ingressado no escolar até o momento.');
    }

    this.alunosIngressadosList = this.requestsService.alunosIngressadosList;
  }

  onAlunoClick(alunoId: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        dadosAluno: this.alunosIngressadosList.find(x => x.id === alunoId)
      }
    };

    this.navCtrl.navigateForward('dados-aluno', navigationExtras);
  }
}
