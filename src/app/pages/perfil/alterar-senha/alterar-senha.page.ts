import { PerfilService } from './../perfil.service';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { AlterarDadosSenhaModel } from '../models/aterar-dados-senha-model';

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

  constructor(private fb: FormBuilder, public globalService: GlobalService, private requestsService: RequestsService,
    private perfilService: PerfilService) { }

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

    this.alterarSenhaForm.get('novaSenha').setValidators(Validators.required);
    this.alterarSenhaForm.get('novaSenha').updateValueAndValidity();

    this.alterarSenhaForm.get('confirmarNovaSenha').setValidators(Validators.required);
    this.alterarSenhaForm.get('confirmarNovaSenha').updateValueAndValidity();

    // Valida se a senha informada no Login é divergente da inserida na tela
    if (this.requestsService.dadosUsuarioLogado.senha !== this.alterarSenhaForm.get('senha').value) {
      this.validationText = ErrorMessageEnum.senhaDivergente;
      return false;
    }

    if (!this.alterarSenhaForm.valid) {
      this.validationText = ErrorMessageEnum.camposObrigatorios;
      return false;
    }

    if (this.alterarSenhaForm.get('novaSenha').value !== this.alterarSenhaForm.get('confirmarNovaSenha').value) {
      this.validationText = ErrorMessageEnum.senhaConfirmacaoDivergente;
      return false;
    }

    this.validationText = '';

    return true;
  }

  onSalvar() {

    if (!this.efetuarValidacoes()) {
      return;
    }

    const dadosSenhaAlterados = new AlterarDadosSenhaModel();

    dadosSenhaAlterados.id = this.requestsService.dadosUsuarioLogado.id;
    dadosSenhaAlterados.senha = this.alterarSenhaForm.get('novaSenha').value;

    this.perfilService.salvarDadosSenha(dadosSenhaAlterados).subscribe((resposta: any) => {
      if (resposta) {
        this.requestsService.presentToastPositivoTop('Senha alterada com sucesso.');
        this.requestsService.dadosUsuarioLogado.senha = dadosSenhaAlterados.senha;
        this.alterarSenhaForm.reset();
      }
    });
  }

}
