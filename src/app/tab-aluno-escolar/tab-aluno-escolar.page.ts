/* eslint-disable max-len */
import { TipoVeiculoEnum } from './../compartilhado/enums/tipo-veiculo-enum';
import { Usuario } from './../compartilhado/models/Usuario';
import { Motorista } from './../compartilhado/models/Motorista';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TipoUsuarioEnum } from '../compartilhado/enums/tipo-usuario-enum';
import { SimularLifecycle } from '../compartilhado/components/simular-lifecycle.component';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab-aluno-escolar',
  templateUrl: 'tab-aluno-escolar.page.html',
  styleUrls: ['tab-aluno-escolar.page.scss']
})

export class TabAlunoEscolarPage extends SimularLifecycle implements OnInit {

  dadosMotorista: any;
  dadosVeiculo: any;
  alunosIngressadosList = [];

  constructor(private navCtrl: NavController, public requestsService: RequestsService,
    private route: ActivatedRoute, private router: Router) {
    super(router, route);

    if (this.requestsService.tipoUsuarioLogado() === TipoUsuarioEnum.motorista) {
      return;
    }
  }

  onEnter(): void {
    if (!this.requestsService.dadosUsuarioLogado.codigoEscolar) {
      return;
    }

    this.requestsService.obterDadosMotorista(this.requestsService.dadosUsuarioLogado.codigoEscolar).subscribe((resposta: any) => {
      if (resposta && resposta.length === 0) {
        this.requestsService.presentToastNegativoTop('Falha ao obter dados do motorista.');
        return;
      }

      else if (resposta && resposta.DadosMotorista?.length > 0 && resposta.DadosVeiculo?.length > 0) {
        this.dadosMotorista = resposta.DadosMotorista[0];
        this.dadosVeiculo = resposta.DadosVeiculo[0];
        this.dadosVeiculo.tipoVeiculo = TipoVeiculoEnum[resposta.DadosVeiculo[0].tipoVeiculo];

        if (this.dadosVeiculo.tipoVeiculo.length > 0) {
          this.dadosVeiculo.tipoVeiculo = this.dadosVeiculo.tipoVeiculo[0].toUpperCase() +
            this.dadosVeiculo.tipoVeiculo.substring(1);
        }
      }
    });

    this.requestsService.obterListaAlunosIngressadosPorCodigo(this.requestsService.dadosUsuarioLogado.codigoEscolar).subscribe((resposta: any) => {
      if (resposta && resposta.length === 0) {
        this.requestsService.presentToastNegativoTop('Falha ao obter alunos ingressados no escolar.');
        return;
      }

      this.alunosIngressadosList = resposta;
    });
  }

  ngOnInit(): void {
  }

  onFiltrarInput() {
  }

  onIngressar() {
    this.navCtrl.navigateForward('ingressar-page');
  }

  onMotoristaClick() {

    const navigationExtras: NavigationExtras = {
      state: {
        dadosMotorista: this.dadosMotorista,
        dadosVeiculo: this.dadosVeiculo
      }
    };

    this.navCtrl.navigateForward('dados-motorista', navigationExtras);
  }

  onBuscarNovoMotorista() {
    this.navCtrl.navigateForward('mural-motoristas');
  }
}
