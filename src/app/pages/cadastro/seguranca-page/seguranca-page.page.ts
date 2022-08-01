import { RequestsService } from './../../../compartilhado/services/requests.service';
import { CadastroService } from './../cadastro.service';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seguranca-page',
  templateUrl: './seguranca-page.page.html',
  styleUrls: ['./seguranca-page.page.scss'],
})
export class SegurancaPagePage implements OnInit {

  cadastroForm = this.fb.group({
    senha: [''],
    confirmarSenha: [''],
  });

  cadastroTipoText = '';
  validationText = '';
  codigoGerado = '';

  constructor(private fb: FormBuilder, private navCtrl: NavController, private globalService: GlobalService,
    private route: ActivatedRoute, private router: Router, private cadastroService: CadastroService) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras?.state) {
        const navParams = this.router.getCurrentNavigation().extras.state;
        this.cadastroTipoText = navParams.tipoCadastro;
      }
    });
  }

  ngOnInit() {

  }

  onSenhaChange() {
    if (!this.globalService.validarFormatoDeSenha(this.cadastroForm.get('senha').value)) {
      this.validationText = ErrorMessageEnum.senhaFormatoIncorreto;
      return;
    }
    else {
      this.validationText = '';
    }
  }

  efetuarValidacoes(): boolean {
    this.cadastroForm.get('senha').setValidators([Validators.required, Validators.minLength(1)]);
    this.cadastroForm.get('senha').updateValueAndValidity();

    this.cadastroForm.get('confirmarSenha').setValidators(Validators.required);
    this.cadastroForm.get('confirmarSenha').updateValueAndValidity();

    if (!this.cadastroForm.valid) {
      this.validationText = ErrorMessageEnum.camposObrigatorios;
      return false;
    }

    if (this.cadastroForm.get('senha').value !== this.cadastroForm.get('confirmarSenha').value) {
      this.validationText = ErrorMessageEnum.senhaConfirmacaoDivergente;
      return false;
    }

    this.validationText = '';

    return true;
  }

  // Fluxo motorista
  onAvancar() {
    if (!this.efetuarValidacoes()) {
      return;
    }

    this.gerarCodigoMotorista();

    this.cadastroService.dadosProvisoriosUsuarioForm.senha = this.cadastroForm.get('senha').value;

    this.cadastroService.cadastrarUsuario().subscribe(resposta => {

    });

    this.navCtrl.navigateForward('cadastro-realizado-page');
  }

  // Fluxo aluno
  onEntrar() {
    if (!this.efetuarValidacoes()) {
      return;
    }

    this.cadastroService.dadosProvisoriosUsuarioForm.senha = this.cadastroForm.get('senha').value;

    this.cadastroService.cadastrarUsuario().subscribe(resposta => {

    });

    this.navCtrl.navigateForward('login-page');
  }

  gerarCodigoMotorista() {
    let novoCodigoRandomico = '';
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvxw123456789)(';

    for (let i = 0; i < 6; i++) {
      novoCodigoRandomico += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    this.codigoGerado =  this.cadastroService.dadosProvisoriosMotoristaForm.dadosVeiculo.placa + novoCodigoRandomico;

    this.cadastroService.dadosProvisoriosUsuarioForm.codigoMotorista = this.codigoGerado;
  }
}
