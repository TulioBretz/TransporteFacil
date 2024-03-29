import { CadastroService } from './../cadastro.service';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ErrorMessageEnum } from 'src/app/compartilhado/enums/error-message-enum';
import { Guid } from 'guid-typescript';

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

  validationText = '';

  constructor(private fb: FormBuilder, public navCtrl: NavController, public globalService: GlobalService,
    private cadastroService: CadastroService) { }

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

    this.cadastroForm.get('uf').setValidators(Validators.required);
    this.cadastroForm.get('uf').updateValueAndValidity();

    if (!this.cadastroForm.valid) {
      this.validationText = ErrorMessageEnum.camposObrigatorios;
      return;
    }

    this.cadastroService.dadosProvisoriosUsuarioForm.cep = this.cadastroForm.get('cep').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.rua = this.cadastroForm.get('rua').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.bairro = this.cadastroForm.get('bairro').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.cidade = this.cadastroForm.get('cidade').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.numero = this.cadastroForm.get('numero').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.uf = this.cadastroForm.get('uf').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.bloco = this.cadastroForm.get('bloco').value;
    this.cadastroService.dadosProvisoriosUsuarioForm.apto = this.cadastroForm.get('apartamento').value;

    this.navCtrl.navigateForward('tipo-usuario-page');
  }

}
