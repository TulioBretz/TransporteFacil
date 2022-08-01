import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/compartilhado/models/Usuario';

@Component({
  selector: 'app-cartao-virtual',
  templateUrl: './cartao-virtual.page.html',
  styleUrls: ['./cartao-virtual.page.scss'],
})
export class CartaoVirtualPage implements OnInit {

  cartaoVirtualForm = this.fb.group({
    nome: [''],
    descricao: [''],
    locais: [''],
  });

  dadosMotorista: Usuario;
  dadosCartao;

  constructor(private fb: FormBuilder, private requestsService: RequestsService) {
    this.dadosMotorista = this.requestsService.dadosUsuarioLogado;
  }

  ngOnInit() {
  }

}
