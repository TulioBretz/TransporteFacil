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
    senha: ['', Validators.required],
    confirmarSenha: ['', Validators.required],
  });

  cadastroTipoText = '';
  valitationText = '';

  constructor(private fb: FormBuilder, private navCtrl: NavController, private globalService: GlobalService,
    private route: ActivatedRoute, private router: Router) {

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

  efetuarValidacoes() {
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
      return;
    }
  }

  onAvancar() {
    this.efetuarValidacoes();
    this.navCtrl.navigateForward('cadastro-realizado-page');
  }

  onEntrar() {
    this.efetuarValidacoes();
    this.navCtrl.navigateForward('login-page');
  }
}
