import { TipoVeiculoEnum } from './../compartilhado/enums/tipo-veiculo-enum';
import { Usuario } from './../compartilhado/models/Usuario';
import { Motorista } from './../compartilhado/models/Motorista';
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

  dadosMotorista: any;
  dadosVeiculo: any;

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
    this.requestsService.obterDadosMotorista(this.requestsService.dadosUsuarioLogado.codigoEscolar).subscribe((resposta: any) => {
      console.log(resposta, 'resposta');
      if (resposta && resposta.length === 0) {
        this.requestsService.presentToastTop('Falha ao obter dados do motorista.');
        return;
      }

      else if (resposta && resposta.DadosMotorista?.length > 0 && resposta.DadosVeiculo?.length > 0) {
        this.dadosMotorista = resposta.DadosMotorista[0];
        this.dadosVeiculo = resposta.DadosVeiculo[0];
        this.dadosVeiculo.tipoVeiculo = TipoVeiculoEnum[resposta.DadosVeiculo[0].tipoVeiculo];
      }
    });
  }

  onFiltrarInput() {
  }

  onIngressar() {
    this.navCtrl.navigateForward('ingressar-page');
  }
}
