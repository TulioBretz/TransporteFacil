import { RequestsService } from 'src/app/compartilhado/services/requests.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/compartilhado/models/Usuario';
import { CartaoVirtualService } from './cartao-virtual.service';

@Component({
  selector: 'app-cartao-virtual',
  templateUrl: './cartao-virtual.page.html',
  styleUrls: ['./cartao-virtual.page.scss'],
})
export class CartaoVirtualPage implements OnInit {

  cartaoVirtualForm = this.fb.group({
    locaisAtendimento: ['']
  });

  dadosMotorista: Usuario;
  dadosCartao;

  constructor(private fb: FormBuilder, private requestsService: RequestsService, private service: CartaoVirtualService) {
    this.dadosMotorista = this.requestsService.dadosUsuarioLogado;
  }

  ngOnInit() {
  }

  onSalvar() {
    this.service.salvarCartaoVirtual(this.cartaoVirtualForm.get('locaisAtendimento').value).subscribe((resposta: any) => {
      if (resposta) {
        this.requestsService.presentToastPositivoTop('Cartão virtual atualizado com sucesso.');
      }
    });
  }

}
