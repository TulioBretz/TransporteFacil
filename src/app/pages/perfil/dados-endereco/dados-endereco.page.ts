import { PerfilService } from './../perfil.service';
import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { AlterarDadosEnderecoModel } from './../models/alterar-dados-endereco-model';
import { GlobalService } from 'src/app/compartilhado/services/global.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-endereco',
  templateUrl: './dados-endereco.page.html',
  styleUrls: ['./dados-endereco.page.scss'],
})
export class DadosEnderecoPage implements OnInit {

  enderecoForm = this.fb.group({
    cep: [{ value: '', disabled: true }],
    rua: [{ value: '', disabled: true }],
    bairro: [{ value: '', disabled: true }],
    cidade: [{ value: '', disabled: true }],
    numero: [{ value: 0, disabled: true }],
    apto: [{ value: '', disabled: true }],
    bloco: [{ value: '', disabled: true }],
    uf: [{ value: '', disabled: true }],
  });

  modoEdicao = false;

  constructor(private fb: FormBuilder, public globalService: GlobalService, private requestsService: RequestsService,
    private perfilService: PerfilService) {
    this.enderecoForm.patchValue(this.requestsService.dadosUsuarioLogado);
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
    this.enderecoForm.get('cep').enable();
    this.enderecoForm.get('rua').enable();
    this.enderecoForm.get('bairro').enable();
    this.enderecoForm.get('cidade').enable();
    this.enderecoForm.get('numero').enable();
    this.enderecoForm.get('apto').enable();
    this.enderecoForm.get('bloco').enable();
    this.enderecoForm.get('uf').enable();
  }

  disableForm() {
    this.enderecoForm.get('cep').disable();
    this.enderecoForm.get('rua').disable();
    this.enderecoForm.get('bairro').disable();
    this.enderecoForm.get('cidade').disable();
    this.enderecoForm.get('numero').disable();
    this.enderecoForm.get('apto').disable();
    this.enderecoForm.get('bloco').disable();
    this.enderecoForm.get('uf').disable();
  }

  onSalvar() {

    const dadosEnderecoAlterados = new AlterarDadosEnderecoModel();

    dadosEnderecoAlterados.id = this.requestsService.dadosUsuarioLogado.id;

    dadosEnderecoAlterados.cep = this.enderecoForm.get('cep').value;
    dadosEnderecoAlterados.rua = this.enderecoForm.get('rua').value;
    dadosEnderecoAlterados.bairro = this.enderecoForm.get('bairro').value;
    dadosEnderecoAlterados.cidade = this.enderecoForm.get('cidade').value;
    dadosEnderecoAlterados.numero = this.enderecoForm.get('numero').value;
    dadosEnderecoAlterados.apto = this.enderecoForm.get('apto').value;
    dadosEnderecoAlterados.bloco = this.enderecoForm.get('bloco').value;
    dadosEnderecoAlterados.uf = this.enderecoForm.get('uf').value;

    this.perfilService.salvarDadosEndereco(dadosEnderecoAlterados).subscribe((resposta: any) => {
      if (resposta) {
        this.requestsService.presentToastPositivoTop('Dados de endereço alterados com sucesso.');
        this.onEditar();

        this.requestsService.dadosUsuarioLogado.cep = this.enderecoForm.get('cep').value;
        this.requestsService.dadosUsuarioLogado.rua = this.enderecoForm.get('rua').value;
        this.requestsService.dadosUsuarioLogado.bairro = this.enderecoForm.get('bairro').value;
        this.requestsService.dadosUsuarioLogado.numero = this.enderecoForm.get('numero').value;
        this.requestsService.dadosUsuarioLogado.apto = this.enderecoForm.get('apto').value;
        this.requestsService.dadosUsuarioLogado.bloco = this.enderecoForm.get('bloco').value;
        this.requestsService.dadosUsuarioLogado.uf = this.enderecoForm.get('uf').value;
      }
    });
  }

  cepChanged() {

  }

}
