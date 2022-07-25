import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  alterarSenhaForm = this.fb.group({
    senha: ['', Validators.required],
    novaSenha: [''],
    confirmarNovaSenha: [''],
  });

  validationText = '';

  constructor(private fb: FormBuilder, public globalService: GlobalService) { }

  ngOnInit() {
  }

  onSenhaChange() {
    if (!this.globalService.validarFormatoDeSenha(this.alterarSenhaForm.get('senha').value)) {
      this.validationText = ErrorMessageEnum.senhaFormatoIncorreto;
      return;
    }
    else {
      this.validationText = '';
    }
  }

  efetuarValidacoes(): boolean {
    this.alterarSenhaForm.get('senha').setValidators([Validators.required, Validators.minLength(1)]);
    this.alterarSenhaForm.get('senha').updateValueAndValidity();

    this.alterarSenhaForm.get('confirmarSenha').setValidators(Validators.required);
    this.alterarSenhaForm.get('confirmarSenha').updateValueAndValidity();

    if (!this.alterarSenhaForm.valid) {
      this.validationText = ErrorMessageEnum.camposObrigatorios;
      return;
    }

    if (this.alterarSenhaForm.get('senha').value !== this.alterarSenhaForm.get('confirmarSenha').value) {
      this.validationText = ErrorMessageEnum.senhaDivergente;
      return;
    }

    // Caso esteja exibindo alguma mensagem de validação, não deixa prosseguir
    if (this.validationText) {
      return false;
    }

    return true;
  }

}
