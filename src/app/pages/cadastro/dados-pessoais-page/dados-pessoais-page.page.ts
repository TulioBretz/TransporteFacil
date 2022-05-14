import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';

@Component({
  selector: 'app-dados-pessoais-page',
  templateUrl: './dados-pessoais-page.page.html',
  styleUrls: ['./dados-pessoais-page.page.scss'],
})

export class DadosPessoaisPagePage implements OnInit {

  cadastroForm = this.fb.group({
    nomeCompleto: [''],
    cpf: [''],
    email: [''],
    confirmarEmail: [''],
    telefone: ['']
  });

  valitationText = '';

  constructor(private navCtrl: NavController, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onAvancar() {
    this.cadastroForm.get('nomeCompleto').setValidators([Validators.required, Validators.minLength(1)]);
    this.cadastroForm.get('nomeCompleto').updateValueAndValidity();

    this.cadastroForm.get('cpf').setValidators(Validators.required);
    this.cadastroForm.get('cpf').updateValueAndValidity();

    this.cadastroForm.get('email').setValidators(Validators.required);
    this.cadastroForm.get('email').updateValueAndValidity();

    this.cadastroForm.get('confirmarEmail').setValidators(Validators.required);
    this.cadastroForm.get('confirmarEmail').updateValueAndValidity();

    this.cadastroForm.get('telefone').setValidators(Validators.required);
    this.cadastroForm.get('telefone').updateValueAndValidity();

    // if (!this.cadastroForm.valid) {
    //   this.valitationText = ErrorMessageEnum.camposObrigatorios;
    //   return;
    // }

    // if (this.cadastroForm.get('email').value !== this.cadastroForm.get('confirmarEmail').value) {
    //   this.valitationText = ErrorMessageEnum.emailDivergente;
    //   return;
    // }

    this.navCtrl.navigateForward('endereco-page');
  }
}
