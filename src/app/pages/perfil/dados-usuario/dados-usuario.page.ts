/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { AlterarDadosUsuarioModel } from './../models/alterar-dados-usuario-model';
import { PerfilService } from './../perfil.service';
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

  constructor(private fb: FormBuilder, private requestsService: RequestsService, private perfilService: PerfilService) {
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

  onSalvar() {

    if (this.cadastroForm.get('confirmarEmail').value && this.cadastroForm.get('email').value !== this.cadastroForm.get('confirmarEmail').value) {
      this.requestsService.presentToastTop('Email de confirmação divergente do informado.');
      return;
    }

    const dadosUsuarioAlterados = new AlterarDadosUsuarioModel();

    dadosUsuarioAlterados.id = this.requestsService.dadosUsuarioLogado.id;
    dadosUsuarioAlterados.nome = this.cadastroForm.get('nome').value;
    dadosUsuarioAlterados.email = this.cadastroForm.get('email').value;
    dadosUsuarioAlterados.telefone = this.cadastroForm.get('telefone').value;

    this.perfilService.salvarDadosUsuario(dadosUsuarioAlterados).subscribe((resposta: any) => {
      if (resposta) {
        this.requestsService.presentToastPositivoTop('Dados do usuário alterados com sucesso.');
        this.onEditar();
      }

      this.requestsService.dadosUsuarioLogado.nome = this.cadastroForm.get('nome').value;
      this.requestsService.dadosUsuarioLogado.email = this.cadastroForm.get('email').value;
      this.requestsService.dadosUsuarioLogado.telefone = this.cadastroForm.get('telefone').value;
    });
  }
}
