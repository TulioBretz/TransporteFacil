/* eslint-disable max-len */
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno-dados-instituicao-page',
  templateUrl: './cadastro-aluno-dados-instituicao-page.page.html',
  styleUrls: ['./cadastro-aluno-dados-instituicao-page.page.scss'],
})
export class CadastroAlunoDadosInstituicaoPagePage implements OnInit {

  cadastroForm = this.fb.group({
    intituicaoNome: [],
    turno: [],
    horarioDe: [],
    horarioAte: []
  });

  horarioDeValido = true;
  horarioAteValido = true;
  validationText = '';

  constructor(private fb: FormBuilder, public globalService: GlobalService, private navCtrl: NavController) { }

  //TODO: Implementar o OnInit para tabs. Os Validations devem ir para false nele
  ngOnInit() {
  }

  horarioDeChange() {
    if (this.cadastroForm.get('horarioDe').value.length > 0 && this.cadastroForm.get('horarioDe').value.length < 5) {
      this.cadastroForm.get('horarioDe').setValue(this.cadastroForm.get('horarioDe').value.padEnd(5, '0'));
    }

    this.horarioDeValido = this.validarHorario(this.cadastroForm.get('horarioDe').value);
  }

  horarioAteChange() {
    if (this.cadastroForm.get('horarioAte').value.length > 0 && this.cadastroForm.get('horarioAte').value.length < 5) {
      this.cadastroForm.get('horarioAte').setValue(this.cadastroForm.get('horarioAte').value.padEnd(5, '0'));
    }

    this.horarioAteValido = this.validarHorario(this.cadastroForm.get('horarioAte').value);
  }

  validarHorario(horario: string): boolean {
    const horarioSplited = horario.split(':');

    if (+horarioSplited[0] < 0 || +horarioSplited[0] > 23 || +horarioSplited[1] < 0 || +horarioSplited[1] > 59) {
      return false;
    }

    return true;
  }

  validarHorarioMaiorQueAnterior(horarioDe: string, horarioAte: string): boolean {
    const horarioDeSemFormatacao = +horarioDe.replace(':', '');
    const horarioAteSemFormatacao = +horarioAte.replace(':', '');

    if (horarioDeSemFormatacao >= horarioAteSemFormatacao) {
      return false;
    }

    return true;
  }

  onAvancar() {
    this.cadastroForm.get('intituicaoNome').setValidators([Validators.required, Validators.minLength(1)]);
    this.cadastroForm.get('intituicaoNome').updateValueAndValidity();

    this.cadastroForm.get('turno').setValidators(Validators.required);
    this.cadastroForm.get('turno').updateValueAndValidity();

    if (!this.cadastroForm.valid) {
      this.validationText = ErrorMessageEnum.camposObrigatorios;
      return;
    }

    if (!this.horarioDeValido || !this.horarioAteValido || !this.cadastroForm.get('horarioDe').value || !this.cadastroForm.get('horarioAte').value) {
      this.validationText = ErrorMessageEnum.horariosPreenchimentoIncorreto;
      return;
    }

    if (!this.validarHorarioMaiorQueAnterior(this.cadastroForm.get('horarioDe').value, this.cadastroForm.get('horarioAte').value)) {
      this.validationText = ErrorMessageEnum.horariosFinalMaiorQueFinal;
      return;
    }

    const navigationExtras: NavigationExtras = {
      state: {
        tipoCadastro: 'aluno'
      }
    };

    this.navCtrl.navigateForward('seguranca-page', navigationExtras);
  }
}
