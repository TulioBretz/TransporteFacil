/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { DadosMotoristaService } from '../dados-motorista/dados-motorista.service';

@Component({
  selector: 'app-dados-aluno',
  templateUrl: './dados-aluno.page.html',
  styleUrls: ['./dados-aluno.page.scss'],
})
export class DadosAlunoPage implements OnInit {

  dadosAluno;
  subsAlertPergunta: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private requestsService: RequestsService, private service: DadosMotoristaService, private navCtrl: NavController) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras?.state) {
        const navParams = this.router.getCurrentNavigation().extras.state;
        this.dadosAluno = navParams.dadosAluno;
        console.log(this.dadosAluno, 'DADOS ALUNO');
      }
    });

  }

  ngOnInit() {
    this.subsAlertPergunta = this.requestsService.alertPerguntaChanged.subscribe(() => {

      this.service.desvincularUsuarioEscolar(this.dadosAluno.id).subscribe(resposta => {
        if (resposta) {
          this.requestsService.presentToastPositivoTop('Aluno desvinculado com sucesso do escolar.');
          this.navCtrl.navigateRoot('tabs/tab-grupos');
        }
      });

    });
  }

  onSairEscolar() {
    this.requestsService.presentAlertPergunta('Atenção', 'Tem certeza que deseja retirar este aluno do escolar?', '');
  }

}
