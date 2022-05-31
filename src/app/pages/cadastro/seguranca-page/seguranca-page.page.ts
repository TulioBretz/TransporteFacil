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
  valitationText = '';
  codigoGerado = '';

  constructor(private fb: FormBuilder, private navCtrl: NavController, private globalService: GlobalService,
    private route: ActivatedRoute, private router: Router, private cadastroService: CadastroService) {

    this.route.queryParams.subscribe(() => {
      const navParams = this.router.getCurrentNavigation().extras.state;
      this.cadastroTipoText = navParams.tipoCadastro;
    });
  }

  ngOnInit() {

  }

  onSenhaChange() {
    if (!this.globalService.validarFormatoDeSenha(this.cadastroForm.get('senha').value)) {
      this.valitationText = ErrorMessageEnum.senhaFormatoIncorreto;
      return;
    }
    else {
      this.valitationText = '';
    }
  }

  efetuarValidacoes(): boolean {
    this.cadastroForm.get('senha').setValidators([Validators.required, Validators.minLength(1)]);
    this.cadastroForm.get('senha').updateValueAndValidity();

    this.cadastroForm.get('confirmarSenha').setValidators(Validators.required);
    this.cadastroForm.get('confirmarSenha').updateValueAndValidity();

    // if (!this.cadastroForm.valid) {
    //   this.valitationText = ErrorMessageEnum.camposObrigatorios;
    //   return;
    // }

    // if (this.cadastroForm.get('senha').value !== this.cadastroForm.get('confirmarSenha').value) {
    //   this.valitationText = ErrorMessageEnum.senhaDivergente;
    //   return;
    // }

    // Caso esteja exibindo alguma mensagem de validação, não deixa prosseguir
    if (this.valitationText) {
      return false;
    }

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
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvxw123456789!@#$%^?';
    for (let i = 0; i < 10; i++) {
      novoCodigoRandomico += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.codigoGerado = novoCodigoRandomico;

    this.cadastroService.dadosProvisoriosMotoristaForm.codigo = this.codigoGerado;
  }
}
