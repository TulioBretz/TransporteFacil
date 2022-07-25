import { NavController } from '@ionic/angular';
/* eslint-disable max-len */
import { DadosMotoristaService } from './dados-motorista.service';
import { Subscription } from 'rxjs';
import { RequestsService } from './../../compartilhado/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dados-motorista',
  templateUrl: './dados-motorista.page.html',
  styleUrls: ['./dados-motorista.page.scss'],
})
export class DadosMotoristaPage implements OnInit {

  dadosMotorista;
  dadosVeiculo;
  subsAlertPergunta: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private requestsService: RequestsService, private service: DadosMotoristaService, private navCtrl: NavController) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras?.state) {
        const navParams = this.router.getCurrentNavigation().extras.state;
        this.dadosMotorista = navParams.dadosMotorista;
        this.dadosVeiculo = navParams.dadosVeiculo;
      }
    });

  }

  ngOnInit() {
    this.subsAlertPergunta = this.requestsService.alertPerguntaChanged.subscribe(() => {

      this.service.desvincularUsuarioEscolar(this.requestsService.dadosUsuarioLogado.id).subscribe(resposta => {
        if (resposta) {
          this.requestsService.presentToastPositivoTop('Usuário desvinculado com sucesso do escolar.');
          this.requestsService.dadosUsuarioLogado.codigoEscolar = null;
          this.navCtrl.navigateRoot('tabs/tab-aluno-escolar');
        }
      });

    });
  }

  onSairEscolar() {
    this.requestsService.presentAlertPergunta('Atenção', 'Tem certeza que deseja ser desvinculado deste escolar?', '');
  }

}
