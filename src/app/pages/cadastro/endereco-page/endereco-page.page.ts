import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';

@Component({
  selector: 'app-endereco-page',
  templateUrl: './endereco-page.page.html',
  styleUrls: ['./endereco-page.page.scss'],
})
export class EnderecoPagePage implements OnInit {

  cadastroForm = this.fb.group({
    cep: [''],
    rua: [''],
    bairro: [''],
    numero: [''],
    cidade: [''],
    apartamento: [''],
    bloco: [''],
    uf: ['']
  });

  valitationText = '';

  constructor(private fb: FormBuilder, public navCtrl: NavController, public globalService: GlobalService) { }

  ngOnInit() {
  }

  onAvancar() {
    this.cadastroForm.get('cep').setValidators([Validators.required, Validators.minLength(1)]);
    this.cadastroForm.get('cep').updateValueAndValidity();

    this.cadastroForm.get('rua').setValidators(Validators.required);
    this.cadastroForm.get('rua').updateValueAndValidity();

    this.cadastroForm.get('bairro').setValidators(Validators.required);
    this.cadastroForm.get('bairro').updateValueAndValidity();

    this.cadastroForm.get('numero').setValidators(Validators.required);
    this.cadastroForm.get('numero').updateValueAndValidity();

    this.cadastroForm.get('cidade').setValidators(Validators.required);
    this.cadastroForm.get('cidade').updateValueAndValidity();

    this.cadastroForm.get('apartamento').setValidators(Validators.required);
    this.cadastroForm.get('apartamento').updateValueAndValidity();

    this.cadastroForm.get('bloco').setValidators(Validators.required);
    this.cadastroForm.get('bloco').updateValueAndValidity();

    this.cadastroForm.get('uf').setValidators(Validators.required);
    this.cadastroForm.get('uf').updateValueAndValidity();

    // if (!this.cadastroForm.valid) {
    //   this.valitationText = ErrorMessageEnum.camposObrigatorios;
    //   return;
    // }

    this.navCtrl.navigateForward('tipo-usuario-page');
  }

}
