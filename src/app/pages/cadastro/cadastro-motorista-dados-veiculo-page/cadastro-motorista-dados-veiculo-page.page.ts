import { CadastroService } from './../cadastro.service';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cadastro-motorista-dados-veiculo-page',
  templateUrl: './cadastro-motorista-dados-veiculo-page.page.html',
  styleUrls: ['./cadastro-motorista-dados-veiculo-page.page.scss'],
})
export class CadastroMotoristaDadosVeiculoPagePage implements OnInit {

  cadastroForm = this.fb.group({
    placa: ['ABC4848',],
    cor: ['17'],
    tipo: ['3'],
  });

  constructor(private fb: FormBuilder, private navCtrl: NavController, public globalService: GlobalService,
    private cadastroService: CadastroService) { }

  ngOnInit() {
  }

  onAvancar() {
    this.cadastroForm.get('placa').setValidators([Validators.required, Validators.minLength(1)]);
    this.cadastroForm.get('placa').updateValueAndValidity();

    this.cadastroForm.get('cor').setValidators(Validators.required);
    this.cadastroForm.get('cor').updateValueAndValidity();

    this.cadastroForm.get('tipo').setValidators(Validators.required);
    this.cadastroForm.get('tipo').updateValueAndValidity();

    // if (!this.cadastroForm.valid) {
    //   this.valitationText = ErrorMessageEnum.camposObrigatorios;
    //   return;
    // }

    // if (this.cadastroForm.get('email').value !== this.cadastroForm.get('confirmarEmail').value) {
    //   this.valitationText = ErrorMessageEnum.emailDivergente;
    //   return;
    // }

    this.cadastroService.dadosProvisoriosMotoristaForm.dadosVeiculo.placa = this.cadastroForm.get('placa').value;
    this.cadastroService.dadosProvisoriosMotoristaForm.dadosVeiculo.cor = this.cadastroForm.get('cor').value;
    this.cadastroService.dadosProvisoriosMotoristaForm.dadosVeiculo.usuarioId = this.cadastroService.dadosProvisoriosUsuarioForm.id;
    this.cadastroService.dadosProvisoriosMotoristaForm.dadosVeiculo.tipoVeiculo = this.cadastroForm.get('tipo').value;

    const navigationExtras: NavigationExtras = {
      state: {
        tipoCadastro: 'motorista'
      }
    };

    this.navCtrl.navigateForward('seguranca-page', navigationExtras);
  }
}
