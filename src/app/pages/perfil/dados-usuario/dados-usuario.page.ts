import { RequestsService } from './../../../compartilhado/services/requests.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.page.html',
  styleUrls: ['./dados-usuario.page.scss'],
})
export class DadosUsuarioPage implements OnInit {

  cadastroForm = this.fb.group({
    nome: [{ value: '', disabled: true }],
    cpf: [{ value: '', disabled: true }],
    email: [{ value: '', disabled: true }],
    confirmarEmail: [],
    telefone: [{ value: '', disabled: true }]
  });

  modoEdicao = false;

  constructor(private fb: FormBuilder, private requestsService: RequestsService) {
    this.cadastroForm.patchValue(this.requestsService.dadosUsuarioLogado);
  }

  ngOnInit() {
  }

  onEditar() {
    this.modoEdicao = !this.modoEdicao;

    if (this.modoEdicao) {
      this.enableForm();
    } else {
      this.disableForm();
    }
  }

  enableForm() {
    this.cadastroForm.get('nome').enable();
    this.cadastroForm.get('email').enable();
    this.cadastroForm.get('telefone').enable();
  }

  disableForm() {
    this.cadastroForm.get('nome').disable();
    this.cadastroForm.get('email').disable();
    this.cadastroForm.get('telefone').disable();
    this.cadastroForm.get('confirmarEmail').setValue('');
  }
}
